// Check if user is logged in
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userData = localStorage.getItem('userData');

    if (isLoggedIn !== 'true' || !userData) {
        // Redirect to login if not logged in
        window.location.href = 'login.html';
        return;
    }

    // Parse user data and populate profile
    const user = JSON.parse(userData);
    populateProfile(user);
});

function populateProfile(user) {
    // Update welcome message
    document.getElementById('welcomeMessage').textContent = `Welcome, ${user.username}!`;

    // Update profile information
    document.getElementById('profileUsername').textContent = user.username;
    document.getElementById('profileEmail').textContent = user.email;
    document.getElementById('profileRole').textContent = user.role;
    document.getElementById('lastLogin').textContent = user.lastLogin;

    // Set profile image (you can customize this)
    const profileImage = document.getElementById('profileImage');
    profileImage.src = `https://ui-avatars.com/api/?name=${user.username}&background=667eea&color=fff&size=150`;
}

// Handle logout
document.getElementById('logoutBtn').addEventListener('click', function() {
    // Clear login state
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');

    // Redirect to login page
    window.location.href = 'login.html';
});

// Prevent back button after logout
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        window.location.reload();
    }
});