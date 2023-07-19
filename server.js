const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
require('dotenv').config();
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3007;

// Set up sessions with cookies
const sess = {
    secret: process.env.SESS_SECRET,
    cookie: {
        // Stored in milliseconds
        maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

const hbs = exphbs.create({ helpers });

app.use(session(sess));

// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
