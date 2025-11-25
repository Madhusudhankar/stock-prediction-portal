
from django.contrib.auth.models import User
from rest_framework import serializers

# Once After importing the MODEL(USER) and SERIALIZER we need to create the respective Serializer

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True,style = {'input_type':'password'})
    class Meta:
        model = User
        fields = ['username','email','password']
        
    def create(self, validated_data):
        # User.objects.create ----> Saves the password in Plane_text format which we need to HASH it again
        # User.objects.create_user -----> saves password by automatically hashing it
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )  # Same as the abuve code the below LOC represents
         #  user = User.objects.create_user(**validated_data)
        return user

