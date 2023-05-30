from django.shortcuts import render
from rest_framework import generics
from .serializers import DishDetailSerializer, DishsListSerializer
from .serializers import CategorySerializer, IngredientSerializer, DishIngredientSerializer, RecipeSerializer
from .models import *


# Create your views here.

class DishCreateView(generics.CreateAPIView):
    serializer_class = DishDetailSerializer


class DishsListView(generics.ListAPIView):
    serializer_class = DishsListSerializer
    queryset = Dish.objects.all()


class DishsDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = DishDetailSerializer
    queryset = Dish.objects.all()


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class IngredientListVie(generics.ListAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class DishIngredientListVie(generics.ListAPIView):
    queryset = DishIngredient.objects.all()
    serializer_class = DishIngredientSerializer


class RecipeListVie(generics.ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
