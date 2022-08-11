from django.db import models
from datetime import date, datetime, timezone, timedelta
KST = timezone(timedelta(hours=9))

# Create your models here.
class GuestBook(models.Model):
    name = models.CharField(max_length=30, default="익명")
    contents = models.TextField()
    cdate = models.DateTimeField(default=datetime.now(KST))
    
    def __str__(self):
        return self.name
