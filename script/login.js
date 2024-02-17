 // Login Form Submission
 document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check login credentials
    if (username === 'admin' && password === '12345') {
      // Redirect to main page
      window.location.href = 'home.html';
    } else {
      alert('Invalid login credentials');
    }
  });