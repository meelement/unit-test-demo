
# VND NodeJS Backend Template with NestJS

## Quick Start
### Prerequisites
```
* Nodejs >= 14.17.1
* Yarn >= 1.22.5
* Nestjs cli (https://nestjs.com/)
* MySQL >= 8.0
```
#### Clone this repository then install dependencies
```
* npm install && nest update 
or
* yarn
```
#### Create .env file
```
DB_TYPE=[database_type]
DB_HOST=[database_host]
DB_PORT=[database_port]
DB_USERNAME=[database_username]
DB_PASSWORD=[database_password]
DB_NAME=[database_name]
API_PORT=[API_port]
API_KEY=[API_key]
API_SECRET=[API_secret]
JWT_SECRET=[jwt_secret]
```
#### Start server 
```     
* npm start || npm start:dev 
or
* yarn start
```
### GraphQL
Graphql playground
```
http://localhost:<port>/graphql

```
### Production
```
https://graph.vndcredit.vn/graphql
```