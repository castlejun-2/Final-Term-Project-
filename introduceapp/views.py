from django.shortcuts import render
from guestBook import *
import logging

# Create your views here.

def index(request):
    if request.method == 'POST':
        form = Form()
        logging.debug(form)
    return render(request, 'introduceapp/index.html')