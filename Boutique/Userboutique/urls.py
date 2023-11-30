from django.urls import path
from Userboutique import views
app_name="Userboutique"
urlpatterns = [
    path('Userboutique/',views.Userboutique,name="Userboutique"),
    path('Styles/',views.styles,name="styles"),
    path('About/',views.about,name="about"),
    path('Profile/',views.profile,name="profile"),
    path('Editprofile/',views.editprofile,name="editprofile"),
    path('Changepassword/',views.changepassword,name="changepassword"),
    path('ajaxservice/',views.ajaxservice,name="Ajaxservice"),
    path('Bookingservice/<int:pid>',views.bookingservice,name="bookingservice"),
    path('Blog/',views.blog,name="blog"),
    path('Feedback/',views.feedback,name="feedback"),
    path('logout/',views.logout,name="logout"),
    path('blogserializer/',views.blogupserializer),
    path('blogserializer/<int:qid>',views.blogserializer),
    path('contactserializer/',views.contactserializer),
    path('contactserializer/<int:rid>',views.upcontactserializer),
    path('feedbackserializer/',views.feedbackserializer),
    path('feedbackserializer/<int:sid>',views.upfeedbackserializer),
]