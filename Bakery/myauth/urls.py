from django.urls import path, include
from djoser import views as joser_views
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView
from .views import RegistrUserView


urlpatterns = [
    # ... другие маршруты ...
    # path('auth/jwt/create/', joser_views.TokenCreateView.as_view(), name='token_create'),
    # path('auth/', include('djoser.urls')),
    # path('auth/', include('djoser.urls.jwt')),
    # path('login/', MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    # path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegistrUserView.as_view(), name='token_obtain_pair'),

    # path to our account's app endpoints
    # path("api/accounts/", include("accounts.urls"))
    # path('auth/jwt/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('auth/jwt/verify/', TokenVerifyView.as_view(), name='token_verify'),
    # path('auth/users/', UserCreateView.as_view(), name='user_create'),
]
