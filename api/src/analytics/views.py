from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

import json

# Create your views here.
@csrf_exempt
def analyze(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)
        link = json_data['link']
        if link == "":
            link = "empty (undefined)"
        return JsonResponse({'response': link})
    return HttpResponse("Hello, world. You're at the analytics index.")