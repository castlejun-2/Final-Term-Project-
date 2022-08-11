from django.shortcuts import redirect, render
from guestBook import *

# Create your views here.
def index(request):
    guestBooks = GeustBook.objects.all().order_by('-cdate')[:3]        
    return render(request, 'introduceapp/index.html', {'guestBooks': guestBooks})

def createGuestBook(request):
    if request.method == 'POST':
        guestBook = GeustBook()
        guestBook.name = request.POST['name']
        guestBook.content = request.POST['content']
        guestBook.save()
    return redirect('index')