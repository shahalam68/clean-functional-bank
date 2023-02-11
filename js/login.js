document.getElementById('login-submit').addEventListener('click', function(){
    // get email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get password
    const passwordField =  document.getElementById('user-password');
    const userPassword = passwordField.value;
    //
    if(userEmail == 'soykotalam68@gmail.com' && userPassword == 'soykot007'){
        window.location.href = 'banking.html';
    }
});


