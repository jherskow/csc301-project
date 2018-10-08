# csc301-project

Please let me know if you run into any problems. This is just a basic structure for our project. A lots of the function are not implemented (well)



## Project Overview:
This project uses the following:
+ Docker (docker + docker-compose)
+ React
+ Django
+ Nginx
+ Gunicorn
+ Postgres

We are running everything using docker ( which runs several containers in parallel ). You can think of container as a smaller virtual machine. Each container is a own machine ( has their own IP ). Container can communicate with each other through PORT. We use docker-compose to coordinate these connections. 

![](https://cdn.filestackcontent.com/rJf1U9MTraWZDCJWjQoE)

We have three images (like VM image) : Nginx, Django, and Postgres. [Nginx + Gunicorn?](https://serverfault.com/questions/331256/why-do-i-need-nginx-and-something-like-gunicorn)
~~~~
 Nginx < - connects - > Django <- connects -> Postgres
~~~~

Nginx - Django:
Nginx ( load balancer ) is the reverse-proxy server which will be the entry point for our application. Everyone has to come through this portal (http://your-machine-ip/80). If the user does not issue any GET/POST requests, etc, we will serve the React app ( frontend ) to the them. Otherwise, we forward the request to Django (http://your-machine-ip/8000/analytics). For example, if a user enters a URL to an article and send it to our server ( Gunicorn ). We will use Django to handle that request and response with something. The backend part of our application consists of three things: Gunicorn, Django, and Postgres. For the most part, we can ignore Gunicorn and think of it as a wrapper around Django. Django is also responsible for sending response back to Nginx which will display it to the user.

Django - Postgres:
Django is in charge of communicating with the database as well as handling requests. Django can write and read data to and from PostgreSQL (http://your-machine-ip/5432). Think of the Postgres image is our database server, but the data is stored locally ( inside the container ).

## Quick Start Guide 

For starter:
1.  Install React ( Note: You will need [Node.js + npm](https://nodejs.org/en/download/) for this  )

    ~~~~
    cd frontend
    npm install
    npm run start
    ~~~~

    If you see a web browser pops up, you are good.

2.  Install Django and other related libraries ( [virtualenv](https://help.dreamhost.com/hc/en-us/articles/115000695551-Installing-and-using-virtualenv-with-Python-3) or [Miniconda](https://conda.io/miniconda.html) )

    ~~~~
    cd api
    pip install -r requirments.txt
    ~~~~

3.  Install [Docker](https://docs.docker.com/install/#get-started)
    ( Note: docker-compose comes with Docker for Windows and Mac except [Linux](https://docs.docker.com/compose/install/) )

4.  Build the project ( Only for the first time or if you need to rebuild any images )
    ~~~~
    (csc301-project)
    docker-compose build
    docker-compose up -d
    ~~~~

5.  Run the project
    ~~~~
    (csc301-project)
    docker-compose up
    ~~~~

6.  Finally, open your browser and go to http://(your-machine-ip/80). The web application should be running.
    To check your own IP address
    ~~~~
    docker-machine ip
    ~~~~

7.  To stop the docker, hit CTRL + Z on your keyboard.


## More later..