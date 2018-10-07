from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
@csrf_exempt
def analyze(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)
        link = json_data['link']
        return JsonResponse({'responce':link})
    return HttpResponse("Hello, world. You're at the polls index.")