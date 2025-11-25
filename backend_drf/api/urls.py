from django.urls import path
from accounts import views as UserView


urlpatterns = [
    path('register/',UserView.RegisterView.as_view()), # Because it is a Class based View
]