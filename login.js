// Check if user is already logged in
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        window.location.href = 'profile.html';
    }
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Clear previous error messages
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    // Validate inputs
    if (!username || !password) {
        showError('Please fill in all fields');
        return;
    }

    // Check credentials (hardcoded for demo)
    if (username === 'intern' && password === 'welcome123') {
        // Successful login
        const userData = {
            username: username,
            email: 'intern@company.com',
            role: 'Web Development Intern',
            lastLogin: new Date().toLocaleString()
        };

        // Save login state and user data
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userData', JSON.stringify(userData));

        // Redirect to profile page
        window.location.href = 'profile.html';
    } else {
        showError('Invalid username or password');

        // Clear password field for security
        document.getElementById('password').value = '';
    }
});

function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// Handle Enter key press
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('loginForm').dispatchEvent(new Event('submit'));
    }
});