from django.shortcuts import render
from rest_framework import viewsets
from .serializer import tareaSerializer
from .models import tarea

# Create your views here.
class tareaVista(viewsets.ModelViewSet):
    serializer_class = tareaSerializer
    queryset = tarea.objects.all()