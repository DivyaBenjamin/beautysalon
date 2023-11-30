from rest_framework import serializers
from .models import tbl_typesofservices,tbl_workgalary

class typeserviceserializer(serializers.ModelSerializer):
    class Meta:
        model=tbl_typesofservices
        fields=['id','servicestypes']

class galaryserializer(serializers.ModelSerializer):
    class Meta:
        model=tbl_workgalary
        fields=['id','caption','image']