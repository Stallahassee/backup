
from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.utils.translation import ugettext_lazy as _
from datetime import date
from datetime import datetime
from django.utils import timezone

#extends base user model manager

class UserManager(BaseUserManager):
    user_in_migrations = True

    #Create and save a User with the given email and password1
    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('The given email is not valid')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    #Sets security fields for a regular user
    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff',False)
        extra_fields.setdefault('is_superuser',False)
        return self._create_user(email, password, **extra_fields)

    #Sets security fields for admin
    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('A Super User must be a member of the staff')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('You are not a Super User')
        return self._create_user(email, password, **extra_fields)


# Create your models here.

# CREATE TABLE bus (
#     b_id SERIAL PRIMARY KEY,
#     b_date DATE NOT NULL,
#     b_looking BOOLEAN NOT NULL,
#     b_description TEXT NOT NULL,
#     b_web BYTEA NOT NULL
# );
class Bus(models.Model):
    id = models.AutoField(primary_key=True)
    looking = models.BooleanField()
    description = models.TextField()
    web = models.BinaryField()


# CREATE TABLE stu (
#   u_id SERIAL PRIMARY KEY,
#   u_name VARCHAR(255) NOT NULL,
#   u_pass VARCHAR(32) NOT NULL,
#   u_email VARCHAR(255) UNIQUE,
#   u_date DATE NOT NULL,
#   u_resume TEXT
# );
class Stu(models.Model):
    id =  models.AutoField(primary_key=True)
    resume = models.BinaryField()
    intrests = models.TextField()

      # USERNAME_FIELD  = 'email'
      # REQUIRED_FIELDS = []

      # objects = UserManager()

#Replaces Django's basic User model
class User(AbstractUser):
    email = models.EmailField(_('email address'), unique=True)
    USERNAME_FIELD  = 'email'
    date = models.DateField(_("Date"), default=datetime.now)
    name = models.CharField(max_length=255, help_text='username')
    Bus = models.ForeignKey(Bus, blank = True, null=True, on_delete=models.CASCADE)
    Stu = models.ForeignKey(Stu, blank = True, null=True, on_delete=models.CASCADE)
    REQUIRED_FIELDS = []
    objects = UserManager()


# CREATE TABLE contract (
#     c_id SERIAL PRIMARY KEY,
#     c_title VARCHAR(255) NOT NULL,
#     c_description TEXT NOT NULL,
#     c_create DATE NOT NULL,
#     c_update DATE NOT NULL,
#     c_status SMALLINT NOT NULL,
#     l_id INTEGER NOT NULL REFERENCES link (l_id),
#     l_user INTEGER NOT NULL REFERENCES users (u_id),
#     l_bus INTEGER NOT NULL REFERENCES bus (b_id)
# );
class Contract(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255, help_text='name')
    create = models.DateField(_("Date"), default=datetime.now)
    update = models.DateField(_("Date"), default=datetime.now)
    status = models.PositiveSmallIntegerField()
    date = models.DateField(_("Date"), default=datetime.now)
    stu = models.ForeignKey(Stu,on_delete=models.CASCADE)#May need to change later but won't let me set it to anything else
    bus = models.ForeignKey(Bus,on_delete=models.CASCADE)#May need to change later but won't let me set it to anything else
    content = models.BinaryField()


# class Sub(AbstractUser):#subscription
#     id =  models.AutoField(primary_key=True)
#     relationship = models.CharField(max_length=255, help_text='username')
#     User = models.ForeignKey(User)
#     User = models.ForeignKey(User)
