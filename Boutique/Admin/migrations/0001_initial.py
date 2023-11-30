# Generated by Django 4.2.6 on 2023-10-14 11:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='tbl_user',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=45)),
                ('username', models.CharField(max_length=40)),
                ('email', models.CharField(max_length=35)),
                ('phone', models.CharField(max_length=30)),
                ('password', models.CharField(max_length=25)),
                ('gender', models.CharField(max_length=20)),
            ],
        ),
    ]