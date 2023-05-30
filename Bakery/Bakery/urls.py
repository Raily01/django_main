from django.urls import path, include, re_path
from django.views.generic import TemplateView
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

# schema_view = get_schema_view(
#    openapi.Info(
#       title="Hi ITIS API",
#       default_version='v1',
#       description="Test description",
#       terms_of_service="https://www.google.com/policies/terms/",
#       contact=openapi.Contact(email="contact@snippets.local"),
#       license=openapi.License(name="BSD License"),
#    ),
#    public=True,
#    permission_classes=(permissions.AllowAny,),
# )

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('api/v1/dishs/', include('dishs.urls')),
    # path('api/v1/', include('djoser.urls.jwt')),
    path('auth/', include('myauth.urls')),
    path('auth/log', include('djoser.urls')),
    path('auth/login', include('djoser.urls.jwt')),
    # path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    # path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
