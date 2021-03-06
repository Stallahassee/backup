# Generated by Django 2.1.2 on 2018-10-25 18:52

import datetime
import django.contrib.auth.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0009_alter_user_last_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=30, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email address')),
                ('date', models.DateField(default=datetime.datetime.now, verbose_name='Date')),
                ('name', models.CharField(help_text='username', max_length=255)),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Bus',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('looking', models.BooleanField()),
                ('description', models.TextField()),
                ('web', models.BinaryField()),
            ],
        ),
        migrations.CreateModel(
            name='Contract',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(help_text='name', max_length=255)),
                ('create', models.DateField(default=datetime.datetime.now, verbose_name='Date')),
                ('update', models.DateField(default=datetime.datetime.now, verbose_name='Date')),
                ('status', models.PositiveSmallIntegerField()),
                ('date', models.DateField(default=datetime.datetime.now, verbose_name='Date')),
                ('content', models.BinaryField()),
                ('bus', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Bus')),
            ],
        ),
        migrations.CreateModel(
            name='Stu',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('resume', models.BinaryField()),
                ('intrests', models.TextField()),
            ],
        ),
        migrations.AddField(
            model_name='contract',
            name='stu',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Stu'),
        ),
        migrations.AddField(
            model_name='user',
            name='Bus',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.Bus'),
        ),
        migrations.AddField(
            model_name='user',
            name='Stu',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.Stu'),
        ),
        migrations.AddField(
            model_name='user',
            name='groups',
            field=models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups'),
        ),
        migrations.AddField(
            model_name='user',
            name='user_permissions',
            field=models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions'),
        ),
    ]
