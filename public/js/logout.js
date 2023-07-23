
const logOutFormHandler = async function (event) {
    try{
        console.log("logout function");
        const response = await fetch('/api/user/logout', {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        })
        if (response.ok) {
            console.log("user successfully logged out")
            document.location.replace('/');
        } else {
            console.log('Failed to logout user.');
        }
    } catch (error) {
        console.log(error);
    }
};




document.getElementById('logout-btn').addEventListener('click', logOutFormHandler);