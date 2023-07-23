const router = require('express').Router();
const { Entry } = require('../models');

// loads homepage
router.get('/', async (req, res) => {
    // send the rendered handlebars file back as the response
    res.render('homepage', { loggedIn: req.session.loggedIn });
});

router.get('/home', async (req, res) => {
    // send the rendered handlebars file back as the response
    res.render('homepage', { loggedIn: req.session.loggedIn });
});

router.get('/login', async (req, res) => {
    // send the rendered handlebars file back as the response
    res.render('login');
});



// CATEGORY PAGE ROUTES
// loads sports category page

router.get('/sports', async (req, res) => {
    try {
        console.log('here');
        const entryData = await Entry.findAll({
            where: { category: "sports" },
        }).catch((err) => {
            res.json(err);
        });
        console.log(entryData);
        const entries = entryData.map((entry) => entry.get({ plain: true }));
        entries.reverse()
        res.render('sports', { entries, loggedIn: req.session.loggedIn });
    }
    catch (ex){
        console.log(ex);
        console.log(ex.message);
    }
});


router.get('/music', async (req, res) => {
    try {
        console.log('here');
        const entryData = await Entry.findAll({
            where: { category: "music" },
        }).catch((err) => {
            res.json(err);
        });
        console.log(entryData);
        const entries = entryData.map((entry) => entry.get({ plain: true }));
        entries.reverse()
        res.render('music', { entries, loggedIn: req.session.loggedIn });
    }
    catch (ex) {
        console.log(ex);
        console.log(ex.message);
    }
});

router.get('/cars', async (req, res) => {
    try {
        console.log('here');
        const entryData = await Entry.findAll({
            where: { category: "cars" },
        }).catch((err) => {
            res.json(err);
        });
        console.log(entryData);
        const entries = entryData.map((entry) => entry.get({ plain: true }));
        entries.reverse()
        res.render('cars', { entries, loggedIn: req.session.loggedIn });
    }
    catch (ex) {
        console.log(ex);
        console.log(ex.message);
    }
});

router.get('/books', async (req, res) => {
    try {
        console.log('here');
        const entryData = await Entry.findAll({
            where: { category: "books" },
        }).catch((err) => {
            res.json(err);
        });
        console.log(entryData);
        const entries = entryData.map((entry) => entry.get({ plain: true }));
        entries.reverse()
        res.render('books', { entries, loggedIn: req.session.loggedIn });
    }
    catch (ex) {
        console.log(ex);
        console.log(ex.message);
    }
});

// GET route to take user to the create new post page 
router.get('/userPost', async (req, res) => {
    res.render('userPost', { loggedIn: req.session.loggedIn });
});



// login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;

// all the posts
router.get('/postByCategory/:category', async (req, res) => {
    const category = req.params.category;
    const entryData = await Entry.findAll({
        where: { category: category },
    }).catch((err) => {
        res.json(err);
    });
    const entries = entryData.map((entry) => entry.get({ plain: true }));
    entries.reverse()
    res.render('all', { entries, loggedIn: req.sessions.loggedIn });
});
