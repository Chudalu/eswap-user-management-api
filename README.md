## Follow The Instructions Below to Setup and Run on Local Machine

## Implementation Summary 

# API docs
- Go to https://localhost:8080/docs for Swagger documentation.

# Database Connection
- The Application makes use of SQLITE, so you do not need to connect to any local database.
- If you need to connect to database, you can use PostgreSQL by adding the connection string in the app.config.ts file 
- On start up the application creates a new - database.sqlite file for storage.
- On Unit test cases a new test-database.sqlite file is created for storage. 
- If these files are not created automatically, please add them to the root folder [database.sqlite, test-database.sqlite].

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
