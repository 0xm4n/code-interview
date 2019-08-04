# How to initialize a Django project with an application

### Install Django
```
$ pip install Django
```

### Creating a project
```
django-admin startproject PROJECT_NAME
```

### Creating an app in this project
```
cd PROJECT_NAME
python manage.py startapp APP_NAME
```

### Add the app into the project
```
file path : PROJECT_NAME/setting.py

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'APP_NAME',
]
```

### Set up the PostgreSQL Database
```
file path : PROJECT_NAME/setting.py

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'DATABASE_NAME',
        'USER': 'USERNAME',
        'PASSWORD': 'PASSWORD',
        'HOST': '127.0.0.1',
        'PORT': '',
    }
}
```
make sure you have installed psycopg2
if not run the following script
```
pip install psycopg2
```

### Import the exsiting table into the models
```
python manage.py inspectdb > APP_NAME/models.py
```

### Run the server
```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
