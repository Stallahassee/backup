from django.urls import path
from .views import SignUpAPI, LoginAPI, UserAPI

urlpatterns = [
    path('auth/',include('knox.urls')),
    path('auth/signup/', SignUpAPI.as_view()),
    path('auth/login/', LoginAPI.as_view()),
    path('auth/login/user', UserAPI.as_view())
]
