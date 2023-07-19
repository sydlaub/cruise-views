async function newFormHandler(event) {
    console.log('test123');
    event.preventDefault();
    const title = document.querySelector('#post-title').value;
    // const postTitle
    const postBody = document.querySelector('#post-body').value;
    // const postBody
    const category = document.querySelector('#category').value;
    // const category

    const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            postBody,
            category,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    //if the entry is added, the 'all' template will be rerendered
    if (response.ok) {
        document.location.reload();
    } else {
        alert('Failed to add entry');
    }
}

document.querySelector('#post-submit').addEventListener('submit', newFormHandler);
