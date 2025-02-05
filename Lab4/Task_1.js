document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const city = document.getElementById('city').value;
    const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(cb => cb.value);

    if (password !== confirmPassword) {
        alert('Паролі не співпадають!');
        return;
    }

    const formData = {
        login,
        password,
        gender,
        city,
        interests
    };

    console.log(formData); // Here you can handle the form data, send it to a server, etc.
    alert('Форма успішно відправлена!');
});
