

## Installation

```sh
npm install
```

## Setup
* Create .env file on root directory and add the below code
```sh
PORT = 3005
ENV = development
DBHOST = <your mysql database host>
DBPORT = <mysql databse port>
DBNAME = 'migente'
DBUSER = <mysql databse username>
DBPWD = <mysql databse password>
SECRET = AIzaSyAQfxPJiounkhOjODEO5ZieffeBv6yft2Q
```
* Create database in mysql, named - migente
* Insert table - `npm run insert:table`

## Start an app

```sh
npm start
```
