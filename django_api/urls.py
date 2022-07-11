from django.urls import path
from django_api import views
from .views import RegisterView, LoginView, LogoutView, UserView

urlpatterns = [
    path('', views.index, name='index'),
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('logout', LogoutView.as_view()),
    path('user', UserView.as_view()),

]
