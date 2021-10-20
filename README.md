# To get the Docker running locally:

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

- `controllers/` - This folder contains the controllers for the application

- `database/` - This folder contains sequelize configs, migrations, seeders, and models

  - `config/` - This folder contains sequelize config variables

  - `migrations/` - This folder contains sequelize migrations

  - `models/` - This folder contains sequelize models

  - `seeders/` - This folder contains sequelize seeders

- `define/` - This folder contains app definitions for the Express server

  - `modules/definePassport.ts` - Adds passport to app

  - `modules/defineSession.ts` - Adds express-session to app

- `routes/` - This folder contains the route definitions for our API

- `app.ts` - Creates the Express app
