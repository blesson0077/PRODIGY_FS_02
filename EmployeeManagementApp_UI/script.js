
document.getElementById('employeeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const email = document.getElementById('email').value;

    const table = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${position}</td>
        <td>${email}</td>
        <td>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </td>
    `;

    document.getElementById('employeeForm').reset();

    newRow.querySelector('.delete').addEventListener('click', () => {
        newRow.remove();
    });

    newRow.querySelector('.edit').addEventListener('click', () => {
        document.getElementById('name').value = name;
        document.getElementById('position').value = position;
        document.getElementById('email').value = email;
        newRow.remove();
    });
});
