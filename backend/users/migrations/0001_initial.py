# Generated by Django 4.2.20 on 2025-03-09 09:23

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('manga', '0002_alter_manga_cover_image_chapter_page'),
    ]

    operations = [
        migrations.CreateModel(
            name='Favorite',
            fields=[
                ('_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('manga', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='manga.manga')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
