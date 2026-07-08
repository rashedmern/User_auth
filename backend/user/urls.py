from .import views
from django.urls import path
urlpatterns = [
    path('register/', views.register_user, name='register_user'),
    path('login/', views.login_user, name='login_user'),
    # path('user/<str:user_code>/', views.get_user_by_code, name='get_user_by_code'),
    path('logout/', views.log_out_user, name='log_out_user'),
    path('details/<str:user_code>/', views.show_details, name='show_details'),
]