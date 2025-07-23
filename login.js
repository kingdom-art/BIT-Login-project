// Check if user is already logged in
document.addEventListener('DOMContentLoaded', function () {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const rememberMe = localStorage.getItem('rememberMe');

    if (isLoggedIn === 'true' && rememberMe === 'true') {
        window.location.href = 'profile.html';
    }
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const remember = document.getElementById('rememberMe').checked;
    const errorMessage = document.getElementById('errorMessage');
    const spinner = document.getElementById('spinner');
    const loginBtn = document.getElementById('loginBtn');

    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    // Detailed validation
    if (!username || !password) {
        showError('Please fill in all fields');
        return;
    }

    if (password.length < 6) {
        showError('Password must be at least 6 characters');
        return;
    }

    // Show loading spinner
    spinner.style.display = 'block';
    loginBtn.disabled = true;

    setTimeout(() => {
        // Fake delay to simulate processing
        if (username === 'intern' && password === 'welcome123') {
            const userData = {
                username: username,
                email: 'intern@company.com',
                role: 'Web Development Intern',
                lastLogin: new Date().toLocaleString()
            };

            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userData', JSON.stringify(userData));
            localStorage.setItem('rememberMe', remember ? 'true' : 'false');

            window.location.href = 'profile.html';
        } else {
            showError('Invalid username or password');
            document.getElementById('password').value = '';
        }

        spinner.style.display = 'none';
        loginBtn.disabled = false;
    }, 1000);
});

function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// Handle Enter key press
document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('loginForm').dispatchEvent(new Event('submit'));
    }
});

// Toggle Password Visibility
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type');
    passwordInput.setAttribute('type', type === 'password' ? 'text' : 'password');
});
