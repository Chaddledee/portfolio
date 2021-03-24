from .models import Album, AlbumImage
from .serializers import AlbumSerializer, AlbumImageSerializer
from rest_framework import generics
from django.conf import settings
from rest_framework.response import Response
from rest_framework.views import APIView
import os

class AlbumListCreate(generics.ListCreateAPIView):
	queryset = Album.objects.all()
	serializer_class = AlbumSerializer

class ImageList(generics.ListAPIView):
	serializer_class = AlbumImageSerializer

	def get_queryset(self):
		album_id = self.kwargs['album_id']
		return AlbumImage.objects.filter(album__id=album_id)

class ImageRetrieve(generics.RetrieveAPIView):
	queryset = AlbumImage.objects.all()
	serializer_class = AlbumImageSerializer