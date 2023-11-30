# Generated by Django 4.2.6 on 2023-11-19 02:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Admin', '0017_tbl_assignstaff'),
        ('Guest', '0001_initial'),
        ('Userboutique', '0004_tbl_blogs'),
    ]

    operations = [
        migrations.CreateModel(
            name='tbl_feedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.CharField(max_length=40)),
                ('message_date', models.DateField(auto_now_add=True)),
                ('staff', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='Admin.tbl_staffreg')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='Guest.tbl_user')),
            ],
        ),
    ]