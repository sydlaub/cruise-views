
const submitButton = document.getElementById('post-submit');

const cancelButton = document.getElementById('cancel-btn');

async function submitPost() {
    console.log('test123');
    const title = document.getElementById('post-title').value;
    console.log(title);
    const postBody = document.getElementById('post-body').value;
    console.log(postBody);

    const category = localStorage.getItem('category');
    // have to add userId once setup
    const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            post_body: postBody,
            category: category,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log(response);
    if (response.ok) {
        console.log('123');
        window.location.href = `/${category}`
    }
};

// this function to redirect user back to the category page they were previously on when they click cancel
async function cancelPost() {
    const category = localStorage.getItem('category');
    window.location.href = `/${category}`
}

submitButton.addEventListener('click', submitPost); 


cancelButton.addEventListener('click', cancelPost);