from django.shortcuts import render, redirect  

def Inicio(request):
    
        return render(request, 'index.html')