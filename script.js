document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you can add your form validation and authentication logic

    console.log('Email:', email);
    console.log('Password:', password);

    // For demonstration, showing an alert
    alert('Login attempt made! Check console for details.');
});