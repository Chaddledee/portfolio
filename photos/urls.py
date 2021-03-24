from django.urls import path
from . import views

urlpatterns = [
	path('api/album/', views.AlbumListCreate.as_view() ),
	path('api/album/<int:album_id>', views.ImageList.as_view() ),
	path('api/image/<int:pk>', views.ImageRetrieve.as_view() ),
]