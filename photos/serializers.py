from rest_framework import serializers
from .models import Album, AlbumImage

class AlbumSerializer(serializers.ModelSerializer):
	class Meta:
		model = Album
		fields = ('id', 'name', 'location', 'description', 'thumbnail', 'visible', 'created_at')

class AlbumImageSerializer(serializers.ModelSerializer):
	class Meta:
		model = AlbumImage
		fields = ('id', 'name', 'album', 'image', 'thumbnail', 'visible')