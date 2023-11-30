from rest_framework import serializers
from .models import tbl_blogs,tbl_contactus,tbl_feedback


class Blogserializer(serializers.ModelSerializer):
    class Meta:
        model=tbl_blogs
        fields=['id','subject','message']

class Contactserializer(serializers.ModelSerializer):
    class Meta:
        model=tbl_contactus
        fields=['id','name','phone','email','message']

class Feedbackserializer(serializers.ModelSerializer):
    class Meta:
        model=tbl_feedback
        fields=['id','message']