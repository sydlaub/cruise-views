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
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});



// login route goes here
router.post('/login', async (req, res) => {
    console.log(req.body)
    try { 
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!dbUserData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!'});
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }
        req.session.save(() => {
            req.session.loggedIn = true;
            console.log('🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
                req.session.cookie
            );

            res.status(200).json({ user: dbUserData, message: 'You are now logged in!' })
        })
 
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;