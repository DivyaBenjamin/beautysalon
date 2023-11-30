from django.shortcuts import redirect,render
from Guest.models import *
from Admin.models import *
from django.http import JsonResponse
from .serializer import Userserializer
from rest_framework.decorators import api_view,parser_classes
from rest_framework import status
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser,FormParser

# Create your views here.
def login(request):
    if request.method=="POST":
        usercount=tbl_user.objects.filter(email=request.POST.get('email'),password=request.POST.get('password')).count()
        staffcount=tbl_staffreg.objects.filter(email=request.POST.get('email'),password=request.POST.get('password')).count()
        admincount=tbl_admin.objects.filter(email=request.POST.get('email'),password=request.POST.get('password')).count()
        if usercount>0:
            userdata=tbl_user.objects.get(email=request.POST.get('email'),password=request.POST.get('password'))
            request.session["uid"]=userdata.id
            request.session["uname"]=userdata.name
            return redirect('Userboutique:Userboutique')
        elif staffcount>0:
            staffdata=tbl_staffreg.objects.get(email=request.POST.get('email'),password=request.POST.get('password'))
            request.session["sid"]=staffdata.id
            request.session["sname"]=staffdata.name
            return redirect('shopboutique:shopboutique')
        elif admincount>0:
            admindata=tbl_admin.objects.get(email=request.POST.get('email'),password=request.POST.get('password'))
            request.session["aid"]=admindata.id
            request.session["aname"]=admindata.name
            return redirect('adminboutique:adminboutique')
        else:
            return render(request,"Guest/Login.html")
    else:
        return render(request,'Guest/Login.html')

def userreg(request):
    userdata=tbl_user.objects.all()
    if request.method=="POST":
        tbl_user.objects.create(name=request.POST.get('fullName'),username=request.POST.get('username'),phone=request.POST.get('phoneNumber'),email=request.POST.get('email'),gender=request.POST.get('gender'),password=request.POST.get('password'),image=request.FILES.get('image'))
        return redirect('webguest:userreg')
    else:
        return render(request,'Guest/Userreg.html',{'data':userdata})

@api_view(['GET','POST'])
@parser_classes([MultiPartParser,FormParser])
def userserializer(request):
    if request.method=="GET":
        userreg=tbl_user.objects.all()
        serializer=Userserializer(userreg,many=True)
        return JsonResponse(serializer.data,safe=False)
    if request.method=="POST":
        serializer=Userserializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','PUT','DELETE'])
@parser_classes([MultiPartParser,FormParser])
def upuserserializer(request,aid):
    try:
        userreg=tbl_user.objects.get(id=aid)
    except tbl_user.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method=="GET":
        serializer=Userserializer(userreg)
        return Response(serializer.data)
    elif request.method=="PUT":
        serializer=Userserializer(userreg,data=request.data)
        if serializer.is_valid():
         serializer.save()
         return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    elif request.method=='DELETE':
        userreg.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



