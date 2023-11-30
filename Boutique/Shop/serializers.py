from rest_framework import serializers
from Admin.models import tbl_staffreg

class Staffserializer(serializers.ModelSerializer):
    class Meta:
        model=tbl_staffreg
        fields=['id','password']