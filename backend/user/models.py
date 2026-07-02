from django.db import models
import datetime
from django.utils import timezone

# Create your models here.
class User(models.Model):
    @staticmethod
    def generate_user_code():
        year = str(timezone.now().year)[-2:]
        month = timezone.now().month
        day = timezone.now().day
        prefix=f"{year}{month:02d}{day:02d}"
        last_user =User.objects.filter(user_code__startswith=prefix).order_by('-id').first()
        if last_user:
            last_user_code = last_user.user_code
            last_user_number = int(last_user_code[-4:])
            new_user_number = last_user_number + 1
        else:
            new_user_number = 1
        return f"{prefix}{new_user_number:04d}"
    
    
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    date_of_birth = models.DateField(null=True, blank=True)
    # day=models.ChoiceField(choices=[(i, i) for i in range(1, 32)], default=1)
    # month=models.ChoiceField(choices=[(i, i) for i in range(1, 13)], default=1)
    # year=models.ChoiceField(choices=[(i, i) for i in range(1900, 2025)], default=2000)
    user_code = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=100)
    confirm_password = models.CharField(max_length=100)
    now = timezone.now()
    
            
        
    
        
        
        
        

    def __str__(self):
        return self.first_name + " " + self.last_name