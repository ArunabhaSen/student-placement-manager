CREATE DATABASE placement_manager;

USE placement_manager;

CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    branch VARCHAR(50) NOT NULL,
    cgpa DECIMAL(3,2) NOT NULL,
    graduation_year INT NOT NULL
);

CREATE TABLE companies (
    company_id INT AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(100) NOT NULL,
    job_role VARCHAR(100) NOT NULL,
    minimum_cgpa DECIMAL(3,2) NOT NULL,
    location VARCHAR(100) NOT NULL
);

CREATE TABLE applications (
    application_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    company_id INT NOT NULL,
    application_date DATE NOT NULL,
    status VARCHAR(30) DEFAULT 'Applied',

    FOREIGN KEY (student_id)
        REFERENCES students(student_id),

    FOREIGN KEY (company_id)
        REFERENCES companies(company_id)
);

INSERT INTO companies
(company_name, job_role, minimum_cgpa, location)
VALUES
('Cognizant', 'Programmer Analyst', 6.00, 'Kolkata'),
('Capgemini', 'Software Engineer', 6.00, 'Kolkata'),
('TCS', 'Graduate Engineer Trainee', 6.00, 'Kolkata'),
('Infosys', 'Systems Engineer', 6.00, 'Pune');

INSERT INTO students
(name, email, branch, cgpa, graduation_year)
VALUES
('Arunabha Sen', 'arunabha@example.com', 'CSE', 8.34, 2027);