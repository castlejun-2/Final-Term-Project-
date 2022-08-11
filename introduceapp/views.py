from django.shortcuts import render
from guestBook import *

# Create your views here.
def index(request):
    if request.method == 'POST':
        guestBook = Form(request.POST)
        if guestBook.is_valid():
            guestBook.save()
    guestBooks = GeustBook.objects.all().order_by('-cdate')[:3]        
    return render(request, 'introduceapp/index.html', {'guestBooks': guestBooks})