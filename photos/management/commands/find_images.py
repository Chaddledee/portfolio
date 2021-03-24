import os
from django.core.management.base import BaseCommand, CommandError
from django.core.files import File
from photos.models import Album, AlbumImage
from django.conf import settings

class Command(BaseCommand):
	help = 'Find new files in albums.'

	def handle(self, *args, **options):
		for album in Album.objects.all():
			album_path=os.path.join(settings.BASE_DIR, 'media', 'photos', album.location)
			img_list=os.listdir(album_path)

		for img_name in img_list:
			img, created = AlbumImage.objects.get_or_create(name=img_name, album=album)
			img_path = os.path.join(album_path, img_name)
			img.image.save(img_name, File(open(img_path, 'rb')))
			img.save()

		empties = []
		for img in AlbumImage.objects.filter(album__name=album.name):
			img_path = os.path.join(album_path, img.name)
			if not os.path.isfile(img_path):
				empties.append(img)
		for empty in empties:
			empty.delete()