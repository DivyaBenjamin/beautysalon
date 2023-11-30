from django.shortcuts import render,redirect
from Userboutique.models import *
from Guest.models import *
from django.conf import settings
from django.core.mail import send_mail
from django.contrib import messages
from django.http import JsonResponse
from .serializers import Blogserializer
from .serializers import Contactserializer
from .serializers import Feedbackserializer
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
# Create your views here.
def Userboutique(request):
    if 'uid' in request.session:
        User=tbl_user.objects.get(id=request.session['uid'])
        return render(request,'Userboutique/home.html',{'i':User})
    else:
        return redirect('webguest:login')


def styles(request):
    if 'uid' in request.session:
        stypedata=tbl_typesofservices.objects.all()
        userdata=tbl_user.objects.get(id=request.session["uid"])
        servicesdata=tbl_addservices.objects.all()
        return render(request,'Userboutique/Styles.html',{'servicestypes':stypedata,'services':servicesdata})
    else:
        return redirect('webguest:login')

def ajaxservice(request):
    types=tbl_typesofservices.objects.get(id=request.GET.get("sid"))
    services=tbl_addservices.objects.filter(servicestypes=types)
    return render(request,"Userboutique/Ajaxservice.html",{'services':services})

def bookingservice(request,pid):
    if 'uid' in request.session:
        bookingservicedata=tbl_bookingservice.objects.all()
        userdata=tbl_user.objects.get(id=request.session["uid"])
        serviceid=tbl_addservices.objects.get(id=pid)
        if request.method=="POST":
            tbl_bookingservice.objects.create(booked_date=request.POST.get('Bookeddate'),user=userdata,services=serviceid)
            
            email=userdata.email
            send_mail(
                        'Respected Sir/Madam ',#subject
                        "\rYour sevice is booked and got appointment from Lavender Salon"
                        "\r By"
                        "\r AngelSusy" ,#body
                        settings.EMAIL_HOST_USER,
                        [email],
                    )
            return redirect('Userboutique:Userboutique')
        else:
            return render(request,'Userboutique/Bookingservice.html')
    else:
        return redirect('webguest:login')

def about(request):
    if 'uid' in request.session:
        contactdata=tbl_contactus.objects.all()
        if request.method=="POST":
            tbl_contactus.objects.create(name=request.POST.get('name'),phone=request.POST.get('phone'),email=request.POST.get('email'),message=request.POST.get('message'))
            return render(request,'Userboutique/About.html',{'err':2})
        else:
            return render(request,'Userboutique/About.html',{'data':contactdata})
    else:
        return redirect('webguest:login')

def blog(request):
    if 'uid' in request.session:
        blogdata=tbl_blogs.objects.all()
        if request.method=="POST":
            tbl_blogs.objects.create(subject=request.POST.get('subject'),message=request.POST.get('message'))
            return render(request,'Userboutique/Blog.html',{'err':2})
        else:
            return render(request,'Userboutique/Blog.html',{'data':blogdata})
    else:
        return redirect('webguest:login')

def feedback(request):
    if 'uid' in request.session:
        feedbackdata=tbl_user.objects.get(id=request.session['uid'])
        if request.method=="POST":
            tbl_feedback.objects.create(message=request.POST.get('message'),user=feedbackdata)
            return redirect('Userboutique:feedback')
        else:
            return render(request,'Userboutique/Feedback.html')
    else:
        return redirect('webguest:login')

def profile(request):
    if 'uid' in request.session:
        User=tbl_user.objects.get(id=request.session['uid'])
        return render(request,'Userboutique/Profile.html',{'i':User})
    else:
        return redirect('webguest:login')

def editprofile(request):
    if 'uid' in request.session:
        edituser=tbl_user.objects.get(id=request.session['uid'])
        if request.method=="POST":
            edituser.name=request.POST.get('name')
            edituser.username=request.POST.get('username')
            edituser.save()
            return redirect('Userboutique:editprofile')
        else:
            return render(request,'Userboutique/Editprofile.html',{'i':edituser})
    else:
        return redirect('webguest:login')

def changepassword(request):
    if 'uid' in request.session:
        user=tbl_user.objects.get(id=request.session['uid'])
        if request.method=="POST":
            if (user.password)==(request.POST.get('currentpassword')):
                if (request.POST.get('newpassword'))==(request.POST.get('confirmpassword')):
                    user.password=request.POST.get('confirmpassword')
                    user.save()
                    email=user.email
                    send_mail(
                            'Respected Sir/Madam ',#subject
                            "\rYour password is changed"
                            "\r By"
                            "\r AngelSusy" ,#body
                            settings.EMAIL_HOST_USER,
                            [email],
                        )
                    return render(request,'Userboutique/Changepassword.html',{'err':3})
                else:
                    return render(request,'Userboutique/Changepassword.html',{'err':1})
            else:
                return render(request,'Userboutique/Changepassword.html',{'err':2})
        else:
            return render(request,'Userboutique/Changepassword.html',{'i':user})
    else:
        return redirect('webguest:login')

def logout(request):
    del request.session['uid']
    return redirect('webguest:login')

@api_view(['GET'])
def blogupserializer(request):
    if request.method=='GET':
        blogdata=tbl_blogs.objects.all()
        serializer=Blogserializer(blogdata,many=True)
        return JsonResponse(serializer.data,safe=False)

@api_view(['GET','PUT'])
def blogserializer(request,qid):
    try:
        blog=tbl_blogs.objects.get(id=qid)
    except tbl_blogs.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method=='GET':
        serializer=Blogserializer(blog)
        return Response(serializer.data)
    elif request.method=='PUT':
        serializer=Blogserializer(blog,data=request.data)
        if serializer.is_valid():
         serializer.save()
         return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST'])
def contactserializer(request):
    if request.method=='GET':
        contactdata=tbl_contactus.objects.all()
        serializer=Contactserializer(contactdata,many=True)
        return JsonResponse(serializer.data,safe=False)
    if request.method=='POST':
        serializer=Contactserializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','PUT'])
def upcontactserializer(request,rid):
    try:
        contact=tbl_contactus.objects.get(id=rid)
    except tbl_contactus.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method=='GET':
        serializer=Contactserializer(contact)
        return Response(serializer.data)
    elif request.method=='PUT':
        serializer=Contactserializer(contact,data=request.data)
        if serializer.is_valid():
         serializer.save()
         return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST'])
def feedbackserializer(request):
    if request.method=='GET':
        feedback=tbl_feedback.objects.all()
        serializer=Feedbackserializer(feedback,many=True)
        return JsonResponse(serializer.data,safe=False)
    if request.method=='POST':
        serializer=Feedbackserializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors,status=status.HTTP_400_BAD_REQUEST) 

@api_view(['GET','PUT'])
def upfeedbackserializer(request,sid):
    try:
        feedbackdata=tbl_feedback.objects.get(id=sid)
    except tbl_feedback.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method=='GET':
        serializer=Feedbackserializer(feedbackdata)
        return Response(serializer.data)
    elif request.method=='PUT':
        serializer=Feedbackserializer(feedbackdata,data=request.data)
        if serializer.is_valid():
         serializer.save()
         return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
