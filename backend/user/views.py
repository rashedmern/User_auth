from django.shortcuts import render
from rest_framework import generics
from . import models
from django.shortcuts import render
from .models import *
from .serializer import UserSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework.permissions import AllowAny

from django.shortcuts import get_object_or_404


@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    try:
        data=request.data
        # serializer=UserSerializer(data=data)
        # if serializer.is_valid():
        #     serializer.save()
        if data['password'] != data['confirm_password']:
            return Response({"error": "Passwords do not match"}, status=status.HTTP_400_BAD_REQUEST)
        date_of_birth = f"{data['year']}-{data['month']:02d}-{data['day']:02d}"
        user=models.User.objects.create(
            user_code=models.User.generate_user_code(),
            email=data['email'],
            first_name=data['first_name'],
            last_name=data['last_name'],
            date_of_birth=date_of_birth,
            # day=data['day'],
            # month=data['month'],
            # year=data['year'],
            password=make_password(data['password']),
            
        )
        
        
        return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"error": "Invalid request data"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([AllowAny])
def login_user(request):
    try:
        data = request.data
        email = data.get('email')
        password = data.get('password')
        user = authenticate(request, email=email, password=password)
        if user is not None:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                "user": {
                    "user_code": user.user_code,
                    "email": user.email,
                    "first_name": user.first_name,
                    "last_name": user.last_name,
                    "date_of_birth": user.date_of_birth,
                    
                    
            
                }
            })
        else:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
    except Exception as e:
        return Response({"error": "Invalid request data"}, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def log_out_user(request):
    try:
        refresh_token = request.data.get('refresh')
        if refresh_token is None:
            return Response({"error": "Refresh token is required"}, status=status.HTTP_400_BAD_REQUEST)
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response({"message": "User logged out successfully"}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": "Invalid request data"}, status=status.HTTP_400_BAD_REQUEST)
    
    
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def show_details(request, user_code):
    # user = request.user
    user = models.User.objects.get(user_code=user_code)

    return Response({
        "user_code": user.user_code,
        "email": user.email,
        "first_name": user.first_name,
        "last_name": user.last_name,
        "date_of_birth": user.date_of_birth,
    })