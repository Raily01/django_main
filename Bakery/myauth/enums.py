from django.db import models


class Services(models.TextChoices):
    vk = 'VK', 'ВКонтакте'
    google = 'G', 'Google'