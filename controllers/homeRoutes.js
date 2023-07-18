const router = require('express').Router();

// loads homepage
router.get('/', async (req, res) => {
    // send the rendered handlebars file back as the response
    res.render('homepage');
});

router.get('/home', async (req, res) => {
    // send the rendered handlebars file back as the response
    res.render('homepage');
});

router.get('/login', async (req, res) => {
    // send the rendered handlebars file back as the response
    res.render('login');
});



// CATEGORY PAGE ROUTES
// loads music category page
router.get('/music', async (req, res) => {
    // send the rendered handlebars file back as the response
    res.render('music');
});


router.get('/sports', async (req, res) => {
    res.render('sports');
});

router.get('/music', async (req, res) => {
    res.render('music');
});

router.get('/cars', async (req, res) => {
    res.render('cars');
});

router.get('/books', async (req, res) => {
    res.render('books');
});

// GET route to take user to the create new post page 
router.get('/userPost', async (req, res) => {
    res.render('userPost');
    
});

module.exports = router;
