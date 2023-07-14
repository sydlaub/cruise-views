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

router.get('/sports', async (req, res) => {
    res.render('sports');
}); 

module.exports = router;
