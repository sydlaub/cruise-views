const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the user to the login page
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
    // If the user is logged in, execute the route function that will allow them to view the gallery
    
    // Next() if the user is authenticated
        next();
    }
};

module.exports = withAuth;