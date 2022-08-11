from models import *

class Form():
    class Meta:
        model = GeustBook
        fields = ['name','contents','cdate']