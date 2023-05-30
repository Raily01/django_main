# Generated by Django 4.2.1 on 2023-05-25 14:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Dish',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='name')),
                ('price', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='price')),
                ('description', models.TextField(verbose_name='description')),
                ('image_url', models.URLField(verbose_name='image_url')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dishs.category', verbose_name='category')),
            ],
        ),
        migrations.CreateModel(
            name='Ingredient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('instructions', models.TextField()),
                ('dish', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='dishs.dish')),
            ],
        ),
        migrations.CreateModel(
            name='DishIngredient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.DecimalField(decimal_places=2, max_digits=10)),
                ('dish', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dishs.dish')),
                ('ingredient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dishs.ingredient')),
            ],
        ),
    ]
