# Generated by Django 4.0.5 on 2022-08-12 04:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GuestBook',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='익명', max_length=30)),
                ('contents', models.TextField()),
                ('cdate', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
