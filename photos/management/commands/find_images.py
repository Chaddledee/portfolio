import os
from pathlib import Path

from django.core.management.base import BaseCommand, CommandError
from django.core.files import File
from photos.models import Album, AlbumImage
from django.conf import settings

from imagekit import ImageSpec
from imagekit.processors import ResizeToFill

class Thumbnail(ImageSpec):
    processors = [ResizeToFill(600, 400)]
    format = 'JPEG'
    options = {'quality': 60}

class Command(BaseCommand):
	help = 'Find new files in albums.'

	def handle(self, *args, **options):
		for album in Album.objects.all():
			album_path=os.path.join(settings.MEDIA_ROOT, 'photos', album.location)
			img_list=os.listdir(album_path)

		for img_name in img_list:
			img, created = AlbumImage.objects.get_or_create(name=img_name, album=album)
			img_path = os.path.join('photos', album.location, img_name)
			img.image = img_path

			# Generate thumbnail
			source_file = open(os.path.join(settings.MEDIA_ROOT, img_path), 'rb')
			image_generator = Thumbnail(source=source_file)
			result = image_generator.generate()

			# Get thumbnail paths and check it exists
			thumbnail_path = os.path.join('thumbnails', img_path)
			full_thumbnail_path=os.path.join(settings.MEDIA_ROOT, thumbnail_path)
			Path(os.path.dirname(full_thumbnail_path)).mkdir(parents=True, exist_ok=True)

			# Save thumbnails
			dest = open(full_thumbnail_path, 'wb')
			dest.write(result.read())
			dest.close()
			img.thumbnail = thumbnail_path

			img.save()

		empties = []
		for img in AlbumImage.objects.filter(album__name=album.name):
			img_path = os.path.join(album_path, img.name)
			if not os.path.isfile(img_path):
				empties.append(img)
		for empty in empties:
			empty.delete()