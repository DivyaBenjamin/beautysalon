# Generated by Django 4.2.6 on 2023-11-01 17:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Shop', '0009_remove_tbl_addinghair_haircuts_and_more'),
        ('Admin', '0008_tbl_haircoloring_tbl_typesofcoloring'),
    ]

    operations = [
        migrations.DeleteModel(
            name='tbl_admin',
        ),
        migrations.DeleteModel(
            name='tbl_shop',
        ),
        migrations.DeleteModel(
            name='tbl_staff',
        ),
        migrations.RemoveField(
            model_name='tbl_typesof',
            name='styles',
        ),
        migrations.RemoveField(
            model_name='tbl_typesofcoloring',
            name='haircoloring',
        ),
        migrations.RemoveField(
            model_name='tbl_typesofhair',
            name='haircuts',
        ),
        migrations.DeleteModel(
            name='tbl_user',
        ),
        migrations.DeleteModel(
            name='tbl_haircoloring',
        ),
        migrations.DeleteModel(
            name='tbl_haircuts',
        ),
        migrations.DeleteModel(
            name='tbl_styles',
        ),
        migrations.DeleteModel(
            name='tbl_typesof',
        ),
        migrations.DeleteModel(
            name='tbl_typesofcoloring',
        ),
        migrations.DeleteModel(
            name='tbl_typesofhair',
        ),
    ]
