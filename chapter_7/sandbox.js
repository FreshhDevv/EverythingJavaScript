const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", event => {
    event.preventDefault();
    // validation
    const username = form.username.value;
    

    if(usernamePattern.test(username)) {
        // feedback good info
        feedback.textContent = 'that username is valid';
    } else {
        // feedback help info
        feedback.textContent = 'username must contain letters only & be between 6 & 12 characters long';
    }
});

// live feedback
form.username.addEventListener("keyup", event => {
    // console.log(event.target.value, form.username.value);
    if(usernamePattern.test(event.target.value)) {
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
});


