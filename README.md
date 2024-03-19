## Follow The Instructions Below to Setup and Run on Local Machine

## Implementation Summary 

# API docs
- Go to https://localhost:8080/docs for Swagger documentation.

# Database Connection
- The Application makes use of SQLITE, so you do not need to connect to any local database. 
- On start up the application creates a new - database.sqlite file for storage.
- On Unit test cases a new test-database.sqlite file is created for storage. 
- If these files are not created automatically, please add them to the root folder [database.sqlite, test-database.sqlite].

# Authentication Bearer Token 
- Login with email and password and get access to the Bearer/JWT token and Refresh Token.
- JWT token is returned in the body of the login API response.
- RefreshToken is returned in the cookies and headers of the response.
- Add old RefreshToken to header or cookie to get new JWT Token and repeat to refresh.
- Property name is RefreshToken

# Email Notification
- I created a test email (SMTP options) for sending emails
- Check spam folders for email notifications
- Emails are sent 1 HOUR before event date(time).

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

## RUN Tests

```bash
# unit tests
$ npm run test

```
