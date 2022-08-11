from django.db import models

# Create your models here.
class GuestBook(models.Model):
    name = models.CharField(max_length=30)
    contents = models.TextField()
    cdate = models.DateTimeField(auto_now_add=True)