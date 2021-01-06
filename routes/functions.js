const allJobsVar = function getAllJobs(forPage,callback)
{
		let query;
		if(forPage==1){
         query = "SELECT * FROM `job` ORDER BY id ASC LIMIT 0, 5"; // query database to get all the jobs
		}	
		
		else{
		 query = "SELECT * FROM `job` ORDER BY id ASC LIMIT "+forPage+",5"; // query database to get all the jobs
		}
		
		db.query(query, (err, result) => {
             if (err) {
                return res.status(500).send(err);
            }
			
			return callback(result);
            
        });
		
		
}

const numAllJobsVar =function getNumOfJobs(callback)
{
	let query = "SELECT * FROM `job`";
	db.query(query, (err, result) => {
             if (err) {
                return res.status(500).send(err);
            }
            return callback(result.length);
        });
}


const searchJobsVar =function getSearchResult(page,what,where,how,callback)
{
		let query;
		if(page==1){
         query = "SELECT * FROM `job` WHERE what = '" + what + "' AND typee = '" + how + "' AND wheree = '" + where + "' ORDER BY id ASC LIMIT 0, 5"; // query database to get all the jobs
		}	
		
		else{
		 query = "SELECT * FROM `job` WHERE what = '" + what + "' AND typee = '" + how + "' AND wheree = '" + where + "' ORDER BY id ASC LIMIT "+page+",5"; // query database to get all the jobs
		}
		
		db.query(query, (err, result) => {
             if (err) {
                return res.status(500).send(err);
            }
			
			return callback(result);
            
        });
}


const numSearchJobsVar =function getNumOfSearchJobs(what,where,how,callback)
{
	let query = "SELECT * FROM `job` WHERE what = '" + what + "' AND typee = '" + how + "' AND wheree = '" + where + "'"; ;
	db.query(query, (err, result) => {
             if (err) {
                return res.status(500).send(err);
            }
            return callback(result.length);
        });
}

const loginVar=function checkLogin(mail,pass,callback)
{
		
		let query = "SELECT * FROM `users` WHERE email = '" + mail + "' AND pass = '"+ pass + "'"; // query database to get all the jobs

		db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
			
			return callback(result);
            
        });
}

const registerVar=function register(first_name,last_name,email,pass,cvFile,callback)
{
		
let query = "INSERT INTO `users` (first_name, last_name, email, pass, cv) VALUES ('" +
 first_name + "', '" + last_name + "', '" + email + "', '" + pass + "', '" + cvFile + "')";
		db.query(query, (err, result) => {
             if (err) {
                return callback(0);;
            }
			
			return callback(result);
            
        });
}




const getSentJobs=function checkJobs(user_id,callback)
{
		
		let query = "SELECT * FROM `user_job` WHERE user_id = '" + user_id + "'"; // query database to get all the jobs

		db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
			
			return callback(result);
            
        });
}




const sendCv=function sendMyCv(user_id,job_id,sendate,callback)
{
		
let query = "INSERT INTO `user_job` (user_id, job_id, sendate) VALUES ('" +
 user_id + "', '" + job_id + "', '" + sendate + "')";
		db.query(query, (err, result) => {
             if (err) {
                return callback(0);;
            }
			
			return callback(result);
            
        });
}




module.exports =  { allJobsVar, numAllJobsVar, searchJobsVar,numSearchJobsVar,loginVar,registerVar,getSentJobs,sendCv };
