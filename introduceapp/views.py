from django.shortcuts import redirect, render
from introduceapp.models import GuestBook

# Create your views here.
def index(request):
    guestBooks = GuestBook.objects.all().order_by('-cdate')[:3]        
    return render(request, 'introduceapp/index.html', {'guestBooks': guestBooks})

def createGuestBook(request):
    if request.method == 'POST':
        guestBook = GuestBook()
        guestBook.name = request.POST['name']
        guestBook.content = request.POST['content']
        guestBook.save()
    return redirect('index')