from rest_framework import serializers
from .models import tbl_user

class Userserializer(serializers.ModelSerializer):
    class Meta:
        model=tbl_user
        fields='__all__'