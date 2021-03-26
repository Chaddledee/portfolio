# Generated by Django 3.1.7 on 2021-03-25 01:30

from django.db import migrations, models
import photos.models


class Migration(migrations.Migration):

    dependencies = [
        ('photos', '0006_remove_albumimage_created_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='albumimage',
            name='thumbnail',
            field=models.ImageField(blank=True, upload_to=photos.models.album_path),
        ),
    ]