
module.exports = {
	contactPage: (req, res) => {

		var sess=req.session;
		var user;
		if (typeof sess.user !== 'undefined') user=sess.user;
		let loginRes='';

		res.render('contact.ejs', {
                title: "ברוכים הבאים למערכת כנעאן כח אדם | צפה במשרות"
				,message: 1
				,user:user
				,loginRes:loginRes
				
				
            });

	},
	
    getJobs: (req, res) => {
		
		let pageId = req.params.page;
		let from;
		if(pageId==1) from=1;
		else from = (req.params.page*req.params.page)+1;
		
		let query='';
		let allLenght='';
		let loginRes='';
		let sentJobs='';
		var func = require('./functions');
		
		func.numAllJobsVar(function(num){
        allLenght = num;
		});

		
		var sess=req.session;
		var user;
		var user_id;
		if (typeof sess.user !== 'undefined' ) 
		{
			user=sess.user;
			user_id=user[0].user_id;

			func.getSentJobs(user_id, function(r){
			sentJobs=r;
		});

		}
		else user=undefined;

		func.allJobsVar(from, function(result){
        query = result;
		
		
		
		res.render('jobs.ejs', {
                title: "ברוכים הבאים למערכת כנעאן כח אדם | צפה במשרות"
				,message: req.params.page
				,alll:allLenght
                ,jobs: query
				,user:user
				,loginRes:loginRes
				,sentJobs:sentJobs
				
				
            });
		
      });
		
    },

	searchJobs: (req, res) => {
		
		let what = req.body.what;
		let where = req.body.where;
		let how = req.body.how;
		let pageId = req.params.pageSearch;
		let from;
		let loginRes='';
		let sentJobs='';
		let query,allLenght;
		if(pageId==1) from=1;
		else from=(req.params.pageSearch*req.params.pageSearch)+1;
	
		var func = require('./functions');
		
		func.numSearchJobsVar(what,where,how,function(result){
        allLenght = result;
		});
		
		func.searchJobsVar(pageId,what,where,how,function(result){
        query = result;
		
		var sess=req.session;
		var user_id,user;
		if (typeof sess.user !== 'undefined') 
		{
			user=sess.user;
			user_id=user[0].user_id;

			func.getSentJobs(user_id, function(r){
			sentJobs=r;
		});

		}
		
		res.render('jobs.ejs', {
                title: "ברוכים הבאים למערכת כנעאן כח אדם | צפה במשרות"
				,message: req.params.pageSearch
				,alll:allLenght
                ,jobs: result
				,user:user
				,loginRes:loginRes
				,sentJobs:sentJobs
            });
		});
		
		
	},
	
	
	checkLoginPage: (req, res) => {
		
		let email = req.body.loginMail;
	    let pass = req.body.loginPassword;
		let allLenght='';
		let jobs;
		let from =1;
		
		var func = require('./functions');
		
		func.numAllJobsVar(function(num){
        allLenght = num;
		});
		
		func.allJobsVar(from, function(res){
        jobs = res;
		});
		
		func.loginVar(email,pass, function(result){
        
		req.session.user=result;
		var user=req.session.user;
		let sentJobs='';
		var user_id;
		
		if(result.length>0)
		{
			user_id=user[0].user_id;
			func.getSentJobs(user_id, function(r){
			sentJobs=r;
			});
		}
		else req.session.user=undefined;
		
		let loginRes='';
		if(result==0) loginRes='שם משתמש או הסיסמה שגויים';
		
		res.render('index.ejs', {
                title: "ברוכים הבאים למערכת כנעאן כח אדם | צפה במשרות"
				 ,message: 1
				,alll:allLenght
                ,jobs: jobs
				,user:user
				,loginRes:loginRes
				,sentJobs:sentJobs

            });
			
		
		});		
	},



	sendCVForJob:(req, res) => {
	const fs = require('fs');
	const nodemailer = require('nodemailer');

	const transporter = nodemailer.createTransport('smtps://yourEmail:yourPassword@smtp.gmail.com');
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    var job_id=req.params.jobId;
    var page=req.params.page;
    var user_id=req.session.user[0].user_id;
    var cv=req.session.user[0].cv;
    var folder = 'public/assets/cv/';
    var path=folder.concat(cv);
    var d=new Date();
    var sendate= d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();

	var func = require('./functions');
    var succes;        
    func.sendCv(user_id,job_id,sendate, function(result){
     succes = result;

  	var sendTo='email';
	// setup e-mail data with unicode symbols
	var mailOptions = {
   	from: '"מומעדים" <sam.kin.1993@gmail.com>', // sender address
    to: sendTo, // list of receivers
    subject: 'קורות חיים', // Subject line
    text: 'fdhhfghhhhhhhhhhhhhhhhhh ', // plaintext body
    html: '<h1>'+'קורות חיים מ'+' '+req.session.user[0].first_name+' '+req.session.user[0].last_name +'</h1>'
		   +'<b>'+'המייל שלי'+' '+req.session.user[0].email+'</b>'
		   +'<p>'+'למשרה מספר: '+' '+job_id+'</p>',
	 attachments: [{
     filename: cv,
     content: fs.createReadStream(path)
  	  }]

	};

	transporter.sendMail(mailOptions, function(error, response){
    if(error){
    }else{

    }
  });

      res.redirect('/jobs/'+page);

	

	});

		


	},
	
	
};