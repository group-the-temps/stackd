require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
var nodemailer = require('nodemailer');
const companyMail = require('./nodemailerCredentials/nodemailerCredentials');

const app = express();

const AC = require('./controllers/authController/authController');
const SC = require('./controllers/searchController/searchController');
const QC = require('./controllers/questionsController/questionsController');
const PC = require('./controllers/profileController/profileController');
const LC = require('./controllers/likeController/likeController');

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
app.get('/auth/session', AC.remainLoggedIn);
app.get('/auth/logout', AC.logout);
app.post('/auth/register', AC.register);
app.post('/auth/login', AC.login);

//Search
app.get('/search/title', SC.searchTitle);
app.get('/search/desc', SC.searchDesc);
app.get('/search/tags', SC.searchTags);

//Questions
app.get('/question/all', QC.getAllQuestions);
app.get('/question/selected/:question_id', QC.viewSelectedQuestion);
app.get('/question/selected/answers/:question_id', QC.getSelectedAnswers);
app.post('/question/create', QC.createQuestion);
app.post('/question/create/answer/:question_id', QC.createAnswer);

//Likes
app.get('/question/liked/:question_id', LC.getLikedQuestions)
app.put('/liked/question/:question_id', LC.likedQuestion);
app.put('/liked/answer/:answer_id', LC.likedAnswer);
app.post('/liked/question/bool', LC.boolLikedQuestion);
app.post('/liked/answer/bool', LC.boolLikedAnswer);

//Profile
app.get('/prof/all/:id', PC.getUserProfile);
app.get('/prof/img', PC.getImg);
app.get('/prof/askedquestions/:user_id', PC.getAskedQuestions);
app.put('/prof/displayname', PC.editDisplayName);
app.put('/prof/bio', PC.editBio);
app.put('/prof/cohort', PC.editCohort);
app.put('/prof/img/:user_id', PC.editImg);

//Nodemailer
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

var transport = {
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: companyMail.USER,
        pass: companyMail.PASS,
    }
};

var transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log("nodemailer active");
    }
});

app.post("/send", (req, res, next) => {
    var userName = req.body.userName;
    var userEmail = req.body.userEmail;
    var mail = {
        from: companyMail.USER, // sender address
        to: userEmail, // list of receivers
        subject: "Welcome Devs!", // Subject line
        text: `We want to thank you for creating an account with us ${userName}! If you have any feedback for us, keep it to yourself, cause we're purfect.`// plain text body
      };

transporter.sendMail(mail, (error, data) => {
    if (error) {
      res.json({response: "fail"});
    } else {
      res.json({response: "success"});
    }
  });
});

app.post("/send/to/us", (req, res, next) => {
    var senderName = req.body.senderName;
    var senderEmail = req.body.senderEmail;
    var senderMessage = req.body.senderMessage;
    var totalMessage = `Hey Mountaineer, it looks like ${senderName} has sent you a message!
    \n Message: ${senderMessage}. \n If you would like to respond to this message, please contact the following email: ${senderEmail}`;
  
    var mail = {
      from: senderName,
      to: companyMail.USER,
      subject: "You've got mail!",
      text: totalMessage
    };
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: "fail"
        });
      } else {
        res.json({
          msg: "success"
        });
      }
    });
  });


app.listen(SERVER_PORT, () => {
    console.log(`Listening on Port: ${SERVER_PORT}`);
});