# Student Placement Manager

A beginner-friendly full-stack web application for managing students, companies, and placement applications.

This project demonstrates the use of HTML, CSS, JavaScript, Node.js, Express.js, MySQL, REST APIs, SQL relationships, foreign keys, and JOIN queries.

## Features

- Add and view student records
- View available companies and job roles
- Submit placement applications
- View submitted applications
- Store data in a MySQL relational database
- Use REST APIs for communication between frontend and backend
- Use SQL JOIN queries to display related data
- Use foreign keys to maintain relationships between database tables
- Use environment variables for database configuration

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MySQL
- SQL

### Other
- REST API
- dotenv
- GitHub

## Project Structure

student-placement-manager/
|
|-- public/
|   |-- index.html
|   |-- style.css
|   |-- script.js
|
|-- .env.example
|-- .gitignore
|-- database.sql
|-- package.json
|-- package-lock.json
|-- README.md
|-- server.js

## Database Design

The application uses three main tables:

### 1. Students

Stores student information.

Important fields:

- student_id
- name
- email
- branch
- cgpa
- graduation_year

### 2. Companies

Stores company and job-role information.

Important fields:

- company_id
- company_name
- job_role
- minimum_cgpa
- location

### 3. Applications

Stores placement applications submitted by students.

Important fields:

- application_id
- student_id
- company_id
- application_date
- status

The applications table uses foreign keys to connect students with companies.

Students -> Applications <- Companies

## API Endpoints

### Students

GET /api/students

Retrieves all students.

POST /api/students

Adds a new student.

### Companies

GET /api/companies

Retrieves available companies and job roles.

### Applications

GET /api/applications

Retrieves placement applications along with related student and company information.

This endpoint uses SQL JOIN operations.

POST /api/applications

Creates a new placement application.

## How to Run the Project

### 1. Install Node.js

Make sure Node.js is installed on your computer.

### 2. Set Up MySQL

Open MySQL Workbench and run the contents of:

database.sql

This creates the placement_manager database, tables, and sample data.

### 3. Configure Environment Variables

Create a file named:

.env

in the project root.

Add your MySQL configuration:

DB_HOST=localhost
DB_PORT=3307
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=placement_manager

Replace your_mysql_password with your actual MySQL password.

### 4. Install Dependencies

Open the project folder in the terminal and run:

npm install

### 5. Start the Server

Run:

npm start

If everything is configured correctly, the terminal will show:

Connected to MySQL database.
Server running at http://localhost:3000

### 6. Open the Application

Open the following address in your browser:

http://localhost:3000

## Security

The actual .env file should never be uploaded to GitHub because it contains database credentials.

The repository contains .env.example as a template instead.

The .gitignore file is used to prevent files such as .env and node_modules from being committed accidentally.

## Future Improvements

Possible future improvements include:

- Student search and filtering
- Company search and filtering
- Update and delete operations
- Student login and authentication
- Admin dashboard
- Application status updates
- Improved form validation
- Deployment to a cloud platform
- Role-based access control

## Learning Objectives

This project was created to practice and demonstrate:

- Frontend web development
- JavaScript and DOM manipulation
- Node.js and Express.js
- REST API development
- MySQL database design
- SQL queries
- Primary and foreign keys
- SQL JOIN operations
- Connecting a backend application to a relational database
- Environment-variable based configuration

## Author

Arunabha Sen

B.Tech Computer Science & Engineering
Guru Nanak Institute of Technology, Kolkata