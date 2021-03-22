from django.db import models

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