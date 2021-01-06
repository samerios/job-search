const fs = require('fs');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport('smtps://yourEmail:yourPassword@smtp.gmail.com');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


module.exports = {
    homePage: (req, res) => {
		 var sess=req.session;
		 var user;
		 let loginRes='';
		 if (typeof sess.user !== 'undefined') user=sess.user;
     
        res.render('index.ejs', {
        title: "ברוכים הבאים למערכת כנעאן כח אדם | הוסף משרה חדשה"
        ,message: ''
			  ,user:user
			  ,loginRes:loginRes
        });
},



sendCvFromIndex:(req, res, next) => {


if (!req.file) {
   return res.status(400).send(res);
}



  let message = '';
if (!req.file.originalname.match(/\.(doc|docx)$/)) {
      let filecv = req.file.filename;
      fs.unlink(`public/assets/cv/${filecv}`, (err) => {});

       message = "קובץ וורד בלבד";
      var user=undefined;
      let loginRes='';
      res.render('index.ejs', {
       message
      ,user:user
      ,loginRes  });


    return;
    }
    else{



  var fileName = req.file.originalname;
 	var filePath = req.file.path;
  var sendTo='sam.kin.1993@gmail.com';
	// setup e-mail data with unicode symbols
	var mailOptions = {
   	from: '"מומעדים" <sam.kin.1993@gmail.com>', // sender address
    	to: sendTo, // list of receivers
    subject: 'קורות חיים', // Subject line
    text: 'fdhhfghhhhhhhhhhhhhhhhhh ', // plaintext body
    html: '<h1>'+'קורות חיים מ'+' '+req.body.myName+'</h1>'
		   +'<b>'+'המייל שלי'+' '+req.body.myAddress+'</b>'
		   +'<p>'+'מכתב מקדים'+' '+req.body.mech+'</p>',
	 attachments: [{
       filename: fileName,
       path: filePath
  			 }]

		};


	transporter.sendMail(mailOptions, function(error, response){
    if(error){
      res.render('index.ejs', {
            title: "ברוכים הבאים למערכת כנעאן כח אדם | הוסף משרה חדשה"
            ,message: 'אירעה שגיאת נסה שוב מאוחר יותר'
			,user:undefined
			,loginRes:''
        });
    }else{
      
	  
	   res.render('index.ejs', {
            title: "ברוכים הבאים למערכת כנעאן כח אדם | הוסף משרה חדשה"
            ,message: "קורות החיים נשלחו בהצלחה"
			,user:undefined
			,loginRes:''
        });
	  

    }
  });





    }







},



};