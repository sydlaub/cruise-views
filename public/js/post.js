
const submitButton = document.getElementById('post-submit');


async function submitPost() {
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
};
submitButton.addEventListener('click', submitPost); 