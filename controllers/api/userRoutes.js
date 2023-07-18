const router = require('express').Router();
const { User } = require("../../models");


router.post('/signup', async (req, res) => {
    try {
        // create a user with the sequelize method

        const newUser = await User.create({
              email: req.body.email,
              password: req.body.password
        });
        // then we need to login using sessions (req.sessions object)
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(newUser);
        });

        // once user is successfully logged in we need to send a response res.json(newUser) to send a response that the new user they just made was successsfully created 
    } catch(error) {
        console.log(error);
        res.status(500).json(error);
    }
});



// login route goes here


module.exports = router;