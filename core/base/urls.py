from django.urls import path
from .views import lobby, room

app_name = "base"

urlpatterns = [
    path("", lobby, name="lobby"),
    path("room/", room, name="room")
]
