from games.models import GalleryPhoto
from games.serializer import GalleryPhotoSerializer
from rest_framework import generics


class GalleryPhotoListView(generics.ListCreateAPIView):
    queryset = GalleryPhoto.objects.all()
    serializer_class = GalleryPhotoSerializer


class GalleryPhotoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = GalleryPhoto.objects.all()
    serializer_class = GalleryPhotoSerializer
