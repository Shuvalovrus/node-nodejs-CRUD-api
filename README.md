# CRUD Api

## Description

Simple CRUD API using in-memory database underneath.

## Installation

1. Clone this repo https://github.com/Shuvalovrus/node-nodejs-CRUD-api`
2. Install dependencies ```npm install ```

## How to run
Create build project in buld dir
```
npm run build 
```
Start sever in dev mode
```
npm run dev 
```
Start sever 
```
npm run start 
```
All case tests were conducted in __dev mode__ 

## Endpoints 

### METHOD | URL | Description

***GET*** | api/users |  _Get all persons._

***GET*** | api/users/${userId} | _Get user by id._

***POST*** | api/users |  _Create record about new user and store it in database._ 

***PUT*** | api/users/{userId} | _Update existing user._ 

***DELETE*** | api/users/${userId} | _Delete existing user from database._ 

All request send in __postman__ 
