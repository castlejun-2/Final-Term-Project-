from django.db import models
from pytz import timezone
import datetime

# Create your models here.
class GuestBook(models.Model):
    name = models.CharField(max_length=30, default="익명")
    contents = models.TextField()
    cdate = models.DateTimeField(default=datetime.datetime.now(timezone('Asia/Seoul')))
    
    def __str__(self):
        return self.name
