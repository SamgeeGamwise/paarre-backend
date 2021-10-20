# To get the Docker container running locally:

- Clone this repo

- `npm run dock` - Lints Code, Builds Image, Runs Container, Runs Migrations, Runs Seeder, and Starts Server

# Code Overview

## Technologies

- [Typescript](https://www.typescriptlang.org/) - Add strong typing to JavaScript

- [Express](https://www.npmjs.com/package/express) - The server for handling and routing HTTP requests

- [Docker](https://www.docker.com/) - Containerize application

- [MySQL](https://www.mysql.com/) - Used for SQL Database services

- [Passport](http://www.passportjs.org/packages/passport-local/) - Used for authentication
- [Express Sessions](https://www.npmjs.com/package/express-session) - Used for persisting login

## Application Structure

- `bin/www.ts` - The entry point to our application

- `controllers/` - Contains the controllers for the application

- `database/` - Contains sequelize configs, migrations, seeders, and models

  - `config/` - Contains sequelize config variables

  - `migrations/` - Contains sequelize migrations

  - `models/` - Contains sequelize models

  - `seeders/` - Contains sequelize seeders

- `define/` - Contains app definitions for the Express server

  - `modules/definePassport.ts` - Adds passport to app

  - `modules/defineSession.ts` - Adds express-session to app

- `routes/` - Contains the route definitions for our API

- `app.ts` - Creates the Express app

## Frontend

[Project Frontend Repository](https://github.com/Xoelos/paarre)
