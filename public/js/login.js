// getting the values from the form

const { error } = require("console");


// when the form is submitted, we need to make sure a valid username and password is entered



// if we have valid username and function, run the a loginUser function and clear the form


// this should do a post to the api/login route and redirect to the users page 



// set up event listener for sign up button

const signUpFormHandler = async function () {
    try {
        event.preventDefault();
        console.log("test123")

        // when user inputs their info we need to make sure all the field are filled out and then that information is stored as their username and password

        const newEmail = document.getElementById("email-signup").value.trim();
        const newPassword = document.getElementById("password-signup").value.trim();

        // fetch request to send the data from the client to the server
        const response = await fetch('/api/user/signup', {
            method: "POST",
            body: JSON.stringify({
                email: newEmail,
                password: newPassword
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
if (response.ok) {
    console.log("Successfully signed up new user")
} else {
    console.log("Failed to create new user")
}

    } catch (error) {
        console.log(error);
    }


};

document.getElementById("sign-up-btn").addEventListener("click", signUpFormHandler);

