import React, { useState, useEffect } from "react";
import { fetchGalleryPhotos, DEFAULT_PHOTOS } from "../api/photos";
import API_BASE_URL from "../config/api";

export default function OffDutyGallery() {
  const [photos, setPhotos] = useState(DEFAULT_PHOTOS);
  const [activeTag, setActiveTag] = useState("all");
  const [lightboxPhoto, setLightboxPhoto] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      const data = await fetchGalleryPhotos();
      if (isMounted && data && data.length > 0) {
        setPhotos(data);
      }
    }
    load();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleFileUpload = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const today = new Date();
    const pad = (n) => ("0" + n).slice(-2);
    const dateStamp = `'${pad(today.getFullYear() % 100)} ${pad(
      today.getMonth() + 1
    )} ${pad(today.getDate())}`;

    const localUrl = URL.createObjectURL(file);
    const newPhoto = {
      id: Date.now(),
      title: file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
      caption: "Added from photo roll",
      image_url: localUrl,
      tag: "Moments",
      date_taken: dateStamp,
    };

    setPhotos((prev) => [newPhoto, ...prev]);

    // Attempt to persist to Django API if backend is online
    try {
      const formData = new FormData();
      formData.append("title", newPhoto.title);
      formData.append("caption", newPhoto.caption);
      formData.append("image", file);
      formData.append("tag", "Moments");
      formData.append("date_taken", dateStamp);

      await fetch(`${API_BASE_URL}/api/photos/`, {
        method: "POST",
        body: formData,
      });
    } catch (err) {
      // Local preview is already visible in state
      console.warn("Backend unavailable, photo preview saved in browser session:", err);
    }
  };

  const tags = ["all", "Volleyball", "Coffee", "City"];

  const filteredPhotos = photos.filter((p) => {
    if (activeTag === "all") return true;
    return (p.tag || "").toLowerCase() === activeTag.toLowerCase();
  });

  return (
    <div className="gallery-container">
      {/* Gallery Header Row with Filter Tags and Upload Button */}
      <div className="gallery-header-row">
        <div className="gallery-tags">
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              className={`gallery-tag-btn ${activeTag === t ? "active" : ""}`}
              onClick={() => setActiveTag(t)}
            >
              {t === "all" ? "All Moments" : t}
            </button>
          ))}
        </div>

        <label className="add-photo-btn" title="Upload a photo to your gallery">
          <span>+ Add photo</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            aria-label="Upload a photo to the gallery"
          />
        </label>
      </div>

      {/* Photo Cards Grid */}
      <div className="gallery-grid">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="photo-card spot"
            style={{ backgroundImage: `url(${photo.image_url || photo.image})` }}
            onClick={() => setLightboxPhoto(photo)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setLightboxPhoto(photo);
              }
            }}
          >
            <div className="photo-overlay">
              <div className="photo-top-bar">
                <span className="photo-tag-badge">{photo.tag || "Life"}</span>
                {photo.date_taken && (
                  <span className="photo-stamp">{photo.date_taken}</span>
                )}
              </div>
              <div className="photo-bottom">
                <span className="photo-title">{photo.title}</span>
                {photo.caption && (
                  <span className="photo-caption">{photo.caption}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div
          className="lightbox-modal"
          onClick={() => setLightboxPhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxPhoto.image_url || lightboxPhoto.image}
              alt={lightboxPhoto.title}
              className="lightbox-img"
            />
            <div className="lightbox-info">
              <div>
                <h3 style={{ margin: 0, fontSize: "20px" }}>
                  {lightboxPhoto.title}
                </h3>
                <p style={{ margin: "4px 0 0", color: "var(--muted)", fontSize: "14px" }}>
                  {lightboxPhoto.caption}
                </p>
              </div>
              <button
                type="button"
                className="kbtn"
                onClick={() => setLightboxPhoto(null)}
              >
                Close (Esc)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
