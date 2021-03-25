from django.db import models
from django.utils import timezone

class Album(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    created_at = models.DateTimeField(editable=True)
    visible = models.BooleanField(default=True)
    thumbnail = models.CharField(max_length=100, null=True, default=None)

    def save(self, *args, **kwargs):
        if not self.id:
            self.created_at = timezone.now()
        return super(Album, self).save(*args, **kwargs)

def album_path(instance, filename):
    return 'photos/{0}/{1}'.format(instance.album.location, filename)

class AlbumImage(models.Model):
    name = models.CharField(max_length=100)
    album = models.ForeignKey(Album, on_delete=models.CASCADE)
    image = models.ImageField(upload_to=album_path, blank=True)
    thumbnail = models.ImageField(upload_to=album_path, blank=True)
    visible = models.BooleanField(default=True)