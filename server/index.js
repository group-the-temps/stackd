require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
var nodemailer = require('nodemailer');

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
app.get('/prof/all/:id', PC.getUserProfile);
app.put('/prof/displayname', PC.editDisplayName);
app.put('/prof/bio', PC.editBio);
app.put('/prof/cohort', PC.editCohort);
app.put('/prof/img', PC.editImg);

//Nodemailer
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

var vehicle = {
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: "",
        pass: "",
    }
};

var transporter = nodemailer.createTransport(vehicle);
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log("nodemailer active");
    }
});

app.post("/send", (req, res, next) => {
    var name = req.body.name;
    var email = req.body.email;
    var mail = {
        from: "", // sender address
        to: email, // list of receivers
        subject: "", // Subject line
        text: `Welcome ${name}!`// plain text body
      };

transporter.sendMail(mail, (error, data) => {
    if (error) {
      res.json({response: "fail"});
    } else {
      res.json({response: "success"});
    }
  });
});


app.listen(SERVER_PORT, () => {
    console.log(`Listening on Port: ${SERVER_PORT}`);
});