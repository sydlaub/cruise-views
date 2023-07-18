// redirects the user to the appropriate URL when they want to create a new thread
const urlArr = window.location.href.split('/')
const category = urlArr.at(-1)


// code that stores which category page the user is on and creating a post for
localStorage.setItem("category", category)
const postCategroy = localStorage.getItem("category")


