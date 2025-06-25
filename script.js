document.getElementById("employee-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value;
    const employee = { name, role, email };

    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));

    this.reset();
    renderTable();
});

function renderTable() {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const tbody = document.getElementById("employee-table-body");
    tbody.innerHTML = "";

    employees.forEach((emp, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><input value="${emp.name}" onchange="editEmployee(${index}, 'name', this.value)"></td>
            <td><input value="${emp.role}" onchange="editEmployee(${index}, 'role', this.value)"></td>
            <td><input value="${emp.email}" onchange="editEmployee(${index}, 'email', this.value)"></td>
            <td class="actions">
                <button onclick="deleteEmployee(${index})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function editEmployee(index, field, value) {
    let employees = JSON.parse(localStorage.getItem("employees"));
    employees[index][field] = value;
    localStorage.setItem("employees", JSON.stringify(employees));
    renderTable();
}

function deleteEmployee(index) {
    let employees = JSON.parse(localStorage.getItem("employees"));
    employees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
    renderTable();
}

window.onload = renderTable;