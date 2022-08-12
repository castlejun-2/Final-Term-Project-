from django.db import models

# Create your models here.
class GuestBook(models.Model):
    name = models.CharField(max_length=30, default="익명")
    contents = models.TextField()
    cdate = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name

class Cheering(models.Model):
    number = 0
    
    def __str__(self):
        return self.number