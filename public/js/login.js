// const { error } = require("console");


// set up event listener for sign up button

const signUpFormHandler = async function (event) {
    try {
        event.preventDefault();
        console.log("test123")

        // when user inputs their info we need to make sure all the field are filled out and then that information is stored as their username and password

        const newEmail = document.getElementById("email-signup").value.trim();
        const newPassword = document.getElementById("password-signup").value.trim();
        console.log(newEmail);
        console.log(newPassword);
        // fetch request to send the data from the client to the server
        const response = await fetch('/api/user/signup', {
            method: "POST",
            body: JSON.stringify({
                email: newEmail,
                password: newPassword
            }),
            headers: { "Content-Type": "application/json" }
        });
        if (response.ok) {
            console.log("Successfully signed up new user")
            alert('Your account has successfully been created. Please login below.')
            document.location.replace('/user/login');
        } else {
            console.log("Failed to create new user");
        }

    } catch (error) {
        console.log(error);
    }


};

const loginFormHandler = async (event) => {
    event.preventDefault();
    const email = document.getElementById("email-login").value.trim();
    const password = document.getElementById("password-login").value.trim();
    console.log(email);
    console.log(password);

    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    }
};



// event listener to run signUpFormHandler function when button is clicked
document.getElementById("sign-up-btn").addEventListener("click", signUpFormHandler);


// event listener to run loginFormHandler function when login button is clicked 
document.getElementById("login-btn").addEventListener("click", loginFormHandler);
