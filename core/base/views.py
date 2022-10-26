from django.shortcuts import render


def lobby(request):
    return render(request=request, template_name="base/lobby.html")


def room(request):
    return render(request=request, template_name="base/room.html")
