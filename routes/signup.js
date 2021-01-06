
const fs = require('fs');

module.exports = {
    regiterPage: (req, res) => {
		
		var user;
		let loginRes='';
		res.render('signup.ejs', {
                title: "ברוכים הבאים למערכת כנעאן כח אדם | צפה במשרות"
				,user:user
				,message:''
				,loginRes
            });
    },

   regiterClick: (req, res, next) => {


 if (!req.file) {
            return res.status(400).send(res);
        }

  let message = '';
if (!req.file.originalname.match(/\.(doc|docx)$/)) {
      let filecv = req.file.filename;
      fs.unlink(`public/assets/cv/${filecv}`, (err) => {});

       message = 'קובץ וורד בלבד';
      var user=undefined;
      let loginRes='';
      res.render('signup.ejs', {
       message
      ,user:user
      ,loginRes  });
    return;
    }

  else{ 
  let firstname = req.body.signupFName;
  let lastname = req.body.signupLName;
  let email = req.body.signupEmail;
  let pass = req.body.signupPass;

  let cv_name = req.file.filename;

  var func = require('./functions');  
  let checkIfEmailExists = "SELECT * FROM `users` WHERE email = '" + email + "'";

       
    db.query(checkIfEmailExists, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }

 if (result.length > 0) {

 	let filecv = req.file.filename;
      fs.unlink(`public/assets/cv/${filecv}`, (err) => {});
      message = 'אמיייל קיים במערכת בחר אימייל אחר';
      var user=undefined;
      let loginRes='';
      res.render('signup.ejs', {
       message
      ,title: "ברוכים הבאים למערכת כנעאן כח אדם | צפה במשרות"
      ,user:user
      ,loginRes });
    }

    else{
func.registerVar(firstname,lastname,email,pass,cv_name,function(result){
            if(result)
            {
              var user=undefined;
              let loginRes='';
              message = "נרשמת בהצלחה כמת אפשר להתחבר למערכת";
              res.render('signup.ejs', {
               message
                     ,title: "ברוכים הבאים למערכת כנעאן כח אדם | צפה במשרות"
                     ,user:user
                     ,loginRes
                    });
            }
            else {
                    message = "העלאת קובץ וורד בלבד";
                    var user=undefined;
                    let loginRes='';
                    res.render('signup.ejs', {
                        message
                        ,title: "ברוכים הבאים למערכת כנעאן כח אדם | צפה במשרות"
                        ,user:user
                        ,loginRes
                    });
                }

        });

    }

  });

    
  }



    	},


    };