# Generated by Django 4.2.6 on 2023-10-26 06:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Admin', '0008_tbl_haircoloring_tbl_typesofcoloring'),
        ('Shop', '0006_tbl_addinghair'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tbl_addinghair',
            old_name='haircut',
            new_name='haircuts',
        ),
        migrations.AlterField(
            model_name='tbl_addinghair',
            name='typesofhair',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Admin.tbl_typesofhair'),
        ),
    ]
