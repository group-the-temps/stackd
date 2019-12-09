require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');

const app = express();

const AC = require('./controllers/authController/authController');
const SC = require('./controllers/searchController/searchController');
const QC = require('./controllers/questionsController/questionsController');
const PC = require('./controllers/profileController/profileController');

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db);
        console.log('Database Connected')
    })
    .catch(err => {
        console.log(err);
    });

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookies: {
            maxAge: 1000 * 60 * 60 * 24 * 7 
        }
    })
);

app.use(express.json());

//Authentication
app.get('/auth/logout', AC.logout);
app.post('/auth/register', AC.register);
app.post('/auth/login', AC.login);

//Search
app.get('/search/title', SC.searchTitle);
app.get('/search/desc', SC.searchDesc);
app.get('/search/tags', SC.searchTags);

//Questions
app.post('/question/create', QC.createQuestion);

//Profile
app.get('/prof/all/:user_id', PC.getUserProfile);
app.put('/prof/displayname', PC.editDisplayName);
app.put('/prof/bio', PC.editBio);
app.put('/prof/img', PC.editImg);

app.listen(SERVER_PORT, () => {
    console.log(`Listening on Port: ${SERVER_PORT}`);
});