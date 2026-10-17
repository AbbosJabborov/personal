import API_BASE_URL from "../config/api";

// High-quality default photo moments outside work (volleyball, coffee, city, casual life)
export const DEFAULT_PHOTOS = [
  {
    id: 1,
    title: "Weekend Volleyball Session",
    caption: "Sunset match at the outdoor sand court with friends.",
    image_url: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1200&q=80",
    tag: "Volleyball",
    date_taken: "26 09 14",
  },
  {
    id: 2,
    title: "Corner Cafe & Espresso",
    caption: "Cortado & fresh journal notes before a game jam weekend.",
    image_url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    tag: "Coffee",
    date_taken: "26 08 22",
  },
  {
    id: 3,
    title: "Golden Hour Serve",
    caption: "Chasing rallies under the evening glow.",
    image_url: "https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&w=1200&q=80",
    tag: "Volleyball",
    date_taken: "26 07 30",
  },
  {
    id: 4,
    title: "Quiet Drip & Sketchbook",
    caption: "Testing ideas away from screens.",
    image_url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    tag: "Coffee",
    date_taken: "26 06 18",
  },
  {
    id: 5,
    title: "Evening Stroll in Tashkent",
    caption: "Catching the breeze after a long sprint.",
    image_url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",
    tag: "City",
    date_taken: "26 05 12",
  },
  {
    id: 6,
    title: "Warm Brew & Rain",
    caption: "Window seat watching the storm roll past.",
    image_url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
    tag: "Coffee",
    date_taken: "26 04 05",
  },
];

export async function fetchGalleryPhotos() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/photos/`);
    if (!res.ok) throw new Error("HTTP error " + res.status);
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      return data;
    }
  } catch (err) {
    // Graceful offline fallback
    console.info("Using default off-duty photos collection:", err.message);
  }
  return DEFAULT_PHOTOS;
}
