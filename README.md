# Node PostgreSQL CLI

This project is a command-line interface application that interacts with a PostgreSQL database to manage employees, roles, and departments. It utilizes the `pg` package for database connectivity and the `Inquirer` package for user interaction.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [Functionality](#functionality)
- [License](#license)

## Getting Started

To get started with this project, ensure you have Node.js and PostgreSQL installed on your machine.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/node-postgres-cli.git
   ```
2. Navigate to the project directory:
   ```
   cd node-postgres-cli
   ```
3. Install the required dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your PostgreSQL connection string:
   ```
   DATABASE_URL=your_database_connection_string
   ```

## Usage

To run the application, execute the following command in your terminal:
```
node src/index.js
```

Follow the prompts to interact with the database.

## Database Schema

The database consists of three tables:

- **Department**
  - `id`: SERIAL PRIMARY KEY
  - `name`: VARCHAR(30) UNIQUE NOT NULL

- **Role**
  - `id`: SERIAL PRIMARY KEY
  - `title`: VARCHAR(30) UNIQUE NOT NULL
  - `salary`: DECIMAL NOT NULL
  - `department_id`: INTEGER NOT NULL

- **Employee**
  - `id`: SERIAL PRIMARY KEY
  - `first_name`: VARCHAR(30) NOT NULL
  - `last_name`: VARCHAR(30) NOT NULL
  - `role_id`: INTEGER NOT NULL
  - `manager_id`: INTEGER

## Functionality

The application allows you to:

- Add, update, and delete employees, roles, and departments.
- View employees by manager or department.
- Update employee managers.
- View the total utilized budget of a department.

## Tutorial Video

Feel free to checkout a video tutorial at the following link!!!

- [Tutorial Video](URL)

## License

This project is licensed under the MIT License.