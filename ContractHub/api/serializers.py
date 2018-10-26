from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User


#Create Serializers here



#Authentication Serializers Here
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email')

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','email','password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['email'], None, validated_data['password'])
        return user

class LoginUserSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:#keeping is_active as a value will allow us to "delete" a user without having to delete them from our database
            return user
        raise serializers.ValidationError("Wrong Email/Password")
