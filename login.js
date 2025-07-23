// Check if user is already logged in
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const togglePassword = document.getElementById('togglePassword');
  const rememberMe = document.getElementById('rememberMe');
  const spinner = document.getElementById('spinner');
  const errorMessage = document.getElementById('errorMessage');

  // Load saved email from localStorage if Remember Me was checked
  const savedEmail = localStorage.getItem('rememberedEmail');
  if (savedEmail) {
    emailInput.value = savedEmail;
    rememberMe.checked = true;
  }

  // Toggle password visibility
  togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
  });

  // Form submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset error
    errorMessage.textContent = '';
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate email format
    if (!validateEmail(email)) {
      errorMessage.textContent = 'Please enter a valid email.';
      return;
    }

    // Validate password length
    if (password.length < 6) {
      errorMessage.textContent = 'Password must be at least 6 characters.';
      return;
    }

    // Show spinner
    spinner.classList.remove('hidden');

    // Simulate login process (2 seconds)
    setTimeout(() => {
      spinner.classList.add('hidden');

      // Demo login check
      if (email === 'intern@example.com' && password === 'welcome123') {
        // Remember Me
        if (rememberMe.checked) {
          localStorage.setItem('rememberedEmail', email);
        } else {
          localStorage.removeItem('rememberedEmail');
        }

        // Redirect to profile.html
        window.location.href = 'profile.html';
      } else {
        errorMessage.textContent = 'Invalid email or password.';
      }
    }, 2000);
  });

  function validateEmail(email) {
    // Simple regex for email format
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});

