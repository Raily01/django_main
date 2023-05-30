from django.contrib import admin
from django.urls import path, include
from .views import *

app_name = 'good'
urlpatterns = [
    path('dish/create/', DishCreateView.as_view()),
    path('all/', DishsListView.as_view()),
    path('dish/detail/<int:pk>', DishsDetailView.as_view())
]