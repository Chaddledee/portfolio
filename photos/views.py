from .models import Album
from .serializers import AlbumSerializer
from rest_framework import generics
from django.conf import settings
from rest_framework.response import Response
from rest_framework.views import APIView
import os

class AlbumListCreate(generics.ListCreateAPIView):
	queryset = Album.objects.all()
	serializer_class = AlbumSerializer


class ImageList(APIView):
	def get(self, request, *args, **kwargs):
		album_id = kwargs.get('album_id', None)
		album = Album.objects.get(pk=album_id)
		path=os.path.join(settings.BASE_DIR, 'statichold', 'photos', album.location)
		img_list=os.listdir(path)
		img_urls = ["/static/photos/"+album.location+'/'+filename for filename in img_list]
		return Response({'images': img_urls})