const router = require('express').Router();

router.get('/', async (req, res) => {
    // send the rendered handlebars file back as the response
    res.render('main');
});

module.exports = router;