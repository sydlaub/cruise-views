const router = require('express').Router();

router.get('/', async (req, res) => {
    // send the rendered handlebars file back as the response
    res.render('homepage');
});

router.get('/home', async (req, res) => {
    // send the rendered handlebars file back as the response
    res.render('homepage');
});

router.get('/music', async (req, res) => {
    // send the rendered handlebars file back as the response
    res.render('music');
});

router.get('/login', async (req, res) => {
    // send the rendered handlebars file back as the response
    res.render('login');
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

module.exports = router;
