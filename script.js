function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (user === 'admin' && pass === 'admin') {
        localStorage.setItem('username', user);
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('login-error').innerText = 'Invalid credentials';
    }
}

function submitLeave() {
    const from = document.getElementById('fromDate').value;
    const to = document.getElementById('toDate').value;
    const reason = document.getElementById('reason').value;
    const leave = { from, to, reason, status: 'Pending' };
    let leaves = JSON.parse(localStorage.getItem('leaves') || '[]');
    leaves.push(leave);
    localStorage.setItem('leaves', JSON.stringify(leaves));
    document.getElementById('submit-msg').innerText = 'Leave submitted successfully!';
}

function viewLeaves() {
    const container = document.getElementById('leave-status');
    const leaves = JSON.parse(localStorage.getItem('leaves') || '[]');
    let html = '<h3>Your Leaves</h3>';
    if (leaves.length === 0) {
        html += '<p>No leave records found.</p>';
    } else {
        html += '<ul>';
        leaves.forEach((leave, i) => {
            html += `<li>From: ${leave.from}, To: ${leave.to}, Reason: ${leave.reason}, Status: ${leave.status}</li>`;
        });
        html += '</ul>';
    }
    container.innerHTML = html;
}

window.onload = function () {
    const user = localStorage.getItem('username');
    if (user && document.getElementById('user-name')) {
        document.getElementById('user-name').innerText = user;
    }
}