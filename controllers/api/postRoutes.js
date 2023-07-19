const router = require('express').Router();
const Entry  = require('../../models/Entry');
// needs to be changed

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        // have to add userId once setup
        const dbEntryData = await Entry.create({
            title: req.body.title,
            postBody: req.body.post_body,
            category: req.body.category,
        }).then(resp => {
            if (resp) {
                res.json(resp);
            } 
        });
    
        // req.session.save(() => {
        //     req.session.loggedIn = true;

            res.status(200).json(dbEntryData);
        // });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;