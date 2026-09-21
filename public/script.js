// Add Student

document
    .getElementById("studentForm")
    .addEventListener("submit", async function(event) {

        event.preventDefault();

        const student = {

            name: document.getElementById("name").value,

            email: document.getElementById("email").value,

            branch: document.getElementById("branch").value,

            cgpa: document.getElementById("cgpa").value,

            graduation_year:
                document.getElementById("graduation_year").value
        };


        const response = await fetch(
            "/api/students",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(student)
            }
        );


        const data = await response.json();

        alert(data.message || data.error);

        if (response.ok) {

            document
                .getElementById("studentForm")
                .reset();

            loadStudents();
            loadStudentDropdown();
        }
    });


// Load Students

async function loadStudents() {

    const response =
        await fetch("/api/students");

    const students =
        await response.json();

    let html = `
        <table>

            <tr>
                <th>Name</th>
                <th>Branch</th>
                <th>CGPA</th>
                <th>Graduation</th>
            </tr>
    `;


    students.forEach(student => {

        html += `
            <tr>

                <td>${student.name}</td>

                <td>${student.branch}</td>

                <td>${student.cgpa}</td>

                <td>${student.graduation_year}</td>

            </tr>
        `;
    });


    html += "</table>";

    document.getElementById("students")
        .innerHTML = html;
}


// Load Companies

async function loadCompanies() {

    const response =
        await fetch("/api/companies");

    const companies =
        await response.json();


    let html = `
        <table>

            <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Minimum CGPA</th>
                <th>Location</th>
            </tr>
    `;


    companies.forEach(company => {

        html += `
            <tr>

                <td>${company.company_name}</td>

                <td>${company.job_role}</td>

                <td>${company.minimum_cgpa}</td>

                <td>${company.location}</td>

            </tr>
        `;
    });


    html += "</table>";

    document.getElementById("companies")
        .innerHTML = html;
}


// Load students into dropdown

async function loadStudentDropdown() {

    const response =
        await fetch("/api/students");

    const students =
        await response.json();


    const dropdown =
        document.getElementById("student_id");


    dropdown.innerHTML =
        `<option value="">Select Student</option>`;


    students.forEach(student => {

        dropdown.innerHTML += `
            <option value="${student.student_id}">
                ${student.name}
            </option>
        `;
    });
}


// Load companies into dropdown

async function loadCompanyDropdown() {

    const response =
        await fetch("/api/companies");

    const companies =
        await response.json();


    const dropdown =
        document.getElementById("company_id");


    dropdown.innerHTML =
        `<option value="">Select Company</option>`;


    companies.forEach(company => {

        dropdown.innerHTML += `
            <option value="${company.company_id}">
                ${company.company_name}
            </option>
        `;
    });
}


// Submit Application

document
    .getElementById("applicationForm")
    .addEventListener("submit", async function(event) {

        event.preventDefault();


        const application = {

            student_id:
                document.getElementById("student_id").value,

            company_id:
                document.getElementById("company_id").value
        };


        const response = await fetch(
            "/api/applications",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(application)
            }
        );


        const data = await response.json();

        alert(data.message || data.error);

        if (response.ok) {

            document
                .getElementById("applicationForm")
                .reset();

            loadApplications();
        }
    });


// Load Applications

async function loadApplications() {

    const response =
        await fetch("/api/applications");

    const applications =
        await response.json();


    let html = `
        <table>

            <tr>
                <th>Student</th>
                <th>Company</th>
                <th>Role</th>
                <th>Date</th>
                <th>Status</th>
            </tr>
    `;


    applications.forEach(application => {

        html += `
            <tr>

                <td>${application.student_name}</td>

                <td>${application.company_name}</td>

                <td>${application.job_role}</td>

                <td>${application.application_date}</td>

                <td>${application.status}</td>

            </tr>
        `;
    });


    html += "</table>";

    document.getElementById("applications")
        .innerHTML = html;
}


// Initial loading

loadStudents();

loadCompanies();

loadStudentDropdown();

loadCompanyDropdown();

loadApplications();
