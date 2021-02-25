from django.urls import path, re_path
from django.views.generic import TemplateView
from . import views


urlpatterns = [
    path('', TemplateView.as_view(template_name='frontend/index.html') ),
    path('projects', TemplateView.as_view(template_name='frontend/index.html') ),
    path('about', TemplateView.as_view(template_name='frontend/index.html') ),
    path('photos', TemplateView.as_view(template_name='frontend/index.html') ),
]