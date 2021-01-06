const http = require('http');
const fs = require('fs');
const nodemailer = require('nodemailer');
const url = require('url');
const express = require('express');
const multer = require('multer');
const path = require('path');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const {homePage,sendCvFromIndex} = require('./routes/index');
const {getJobs,searchJobs,checkLoginPage,contactPage,sendCVForJob} = require('./routes/jobs');
const {regiterPage,regiterClick} = require('./routes/signup');

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;


const port = 3000;
const app = express();


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
	
}));



var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets/cv');
  },
  filename: function (req, file, cb) {
   cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));

     }
  });
 
var uploadCsv = multer({ storage: storage });

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/admin/public'));


app.get('/', homePage);
app.get('/jobs/:page', getJobs);
app.get('/signup', regiterPage);
app.get('/contact', contactPage);
app.get('/jobs/:page/:jobId', sendCVForJob);
app.post('/signup', uploadCsv.single('signupCv'),regiterClick);
app.post('/jobs/:pageSearch', searchJobs);
app.post('/login', checkLoginPage);
app.post('/sendMyCvForSystem', uploadCsv.single('cv'),sendCvFromIndex);

// route for user logout
app.get('/logout', (req, res) => {
	req.session.user=undefined;
	res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

