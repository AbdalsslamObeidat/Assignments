class User {
    constructor(fName, lName, email, phone, gender, address) {
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.address = address;
    }
}
//users array
let users = [];
const submit = document.getElementById("submit");

submit.onclick = (event) => {
    event.preventDefault();
//regex
    const nameRegex = /^[A-Za-z]+$/;
    const numberRegex = /^[0-9]+$/;
//used to make the submit valid only when all fields are valid
    let isValid = true;

    const fName = document.getElementById("fName").value.trim();
    if (!fName || !nameRegex.test(fName)) {
        document.getElementById("fNameError").textContent = "First name must be non-empty and contain only alphabetic characters!";
        isValid = false;
    } else {
        document.getElementById("fNameError").textContent = "";
    }
    
    const lName = document.getElementById("lName").value.trim();
    if (!lName || !nameRegex.test(lName)) {
        document.getElementById("lNameError").textContent = "Last name must be non-empty and contain only alphabetic characters!";
        isValid = false;
    } else {
        document.getElementById("lNameError").textContent = "";
    }

    const email = document.getElementById("email").value;
    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").textContent = "Please enter a valid email!";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    const phone = document.getElementById("phone").value;
    if (phone.length != 10 || !numberRegex.test(phone)) {
        document.getElementById("phoneError").textContent = "Please enter a valid phone number! Must be 10 digits.";
        isValid = false;
    } else {
        document.getElementById("phoneError").textContent = "";
    }

    const gender = document.getElementById("gender").value;
    if (!gender) {
        document.getElementById("genderError").textContent = "Please select your Gender!";
        isValid = false;
    } else {
        document.getElementById("genderError").textContent = "";
    }

    const address = document.getElementById("address").value;
    if (!address) {
        document.getElementById("addressError").textContent = "Address must be non-empty!";
        isValid = false;
    } else {
        document.getElementById("addressError").textContent = "";
    }
//If any field is invalid {isValid = false} then submission is stopped
    if (!isValid) return;
//creating a new user obj with the collected data
    const newUser = new User(fName, lName, email, phone, gender, address);
//adding user to the users array
    users.push(newUser);
    alert("Form submitted successfully!");
//reseting the form to be able to fill it again
    document.getElementById("userInput").reset();

    renderUsers();  
};

const toggleBtn = document.getElementById("toggleViewBtn");
const tableView = document.getElementById("userTableView");
const cardView = document.getElementById("userCardView");

let isTableView = true;

toggleBtn.onclick = () => {
    isTableView = !isTableView;
//handling views toggle
    if (isTableView) {
        tableView.classList.replace("d-none", "d-flex");
        cardView.classList.replace("d-flex", "d-none");
        toggleBtn.textContent = "Switch to Card View";
    } else {
        tableView.classList.replace("d-flex", "d-none");
        cardView.classList.replace("d-none", "d-flex");
        toggleBtn.textContent = "Switch to Table View";
    }

    renderUsers();  
};




function renderUsers() {
 
    const usersTable = document.getElementById("usersTable");
//clearing table content each time we switch view to prevent duplication
       usersTable.innerHTML = ''; 

    if (users.length === 0) {
        usersTable.innerHTML = '<tr><td colspan="6">No users added yet.</td></tr>';
        return;
    }

    const headerRow = `
        <thead>
            <tr >
                <th  class="text-info">First Name</th>
                <th  class="text-info">Last Name</th>
                <th  class="text-info">Email</th>
                <th  class="text-info">Phone</th>
                <th  class="text-info">Gender</th>
                <th  class="text-info">Address</th>
            </tr>
        </thead>
    `;
    usersTable.innerHTML += headerRow;
//populating users data
    users.forEach(user => {
        const row = `
            <tr>
                <td>${user.fName}</td>
                <td>${user.lName}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.gender === '1' ? 'Male' : user.gender === '2' ? 'Female' : 'Other'}</td>
                <td>${user.address}</td>
            </tr>
        `;
//adding each user to a row 
        usersTable.innerHTML += row;
    });

   
    const userCardView = document.getElementById("userCardView");
    userCardView.innerHTML = ''; 

    if (users.length === 0) {
        userCardView.innerHTML = '<p>No users added yet.</p>';
        return;
    }
//assigning data to cards
    users.forEach(user => {
        const card = `
            <div class="card border-2 border-info" style="width: 18rem; margin: 10px;">
                <div class="card-body">
                    <h5 class="card-title text-info">${user.fName} ${user.lName}</h5>
                    <p class="card-text">${user.email}</p>
                    <p class="card-text">${user.phone}</p>
                    <p class="card-text">${user.gender === '1' ? 'Male' : user.gender === '2' ? 'Female' : 'Other'}</p>
                    <p class="card-text text-info">${user.address}</p>
                </div>
            </div>
        `;
        userCardView.innerHTML += card;
    });
}
