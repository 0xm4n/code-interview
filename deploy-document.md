# Requirements

## Install Python 3.6.6
```shell
$ sudo yum install centos-release-scl
$ sudo yum install rh-python36
```
Install python package dependency
```
$ pip install pandas
$ pip install tensorflow
$ pip install keras
$ pip install numpy
$ pip install sklearn
$ pip install django
$ pip install dijkstar
```
## Install Node.js 10+
```
$ sudo yum install epel-release
$ sudo yum install nodejs
```
install pm2 to manage the node app
```
$ npm install pm2 -g 
```
## Install and config the PostgreSQL
```
$ sudo yum install postgresql-server postgresql-contrib
$ sudo postgresql-setup initdb
$ sudo systemctl start postgresql
```

## Install Nginx
```
$ sudo yum install nginx
```

