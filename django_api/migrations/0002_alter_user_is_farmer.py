# Generated by Django 4.0.6 on 2022-07-06 20:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('django_api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='is_farmer',
            field=models.BooleanField(default=True),
        ),
    ]
