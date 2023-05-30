from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=255)
    def __str__(self):
        return self.name

class Dish(models.Model):
    name = models.CharField(verbose_name='name', max_length=255)
    price = models.DecimalField(verbose_name='price', max_digits=10, decimal_places=2)
    description = models.TextField(verbose_name='description')
    image_url = models.URLField(verbose_name='image_url')
    category = models.ForeignKey(Category, verbose_name='category', on_delete=models.CASCADE)
    def __str__(self):
        return self.name

class Ingredient(models.Model):
    name = models.CharField(max_length=255)
    def __str__(self):
        return self.name

class DishIngredient(models.Model):
    dish = models.ForeignKey(Dish, on_delete=models.CASCADE)
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    quantity = models.DecimalField(max_digits=10, decimal_places=2)
    def __str__(self):
        return self.ingredient

class Recipe(models.Model):
    dish = models.OneToOneField(Dish, on_delete=models.CASCADE)
    instructions = models.TextField()
    def __str__(self):
        return self.instructions

