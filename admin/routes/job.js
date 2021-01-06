const fs = require('fs');

module.exports = {
    addJobPage: (req, res) => {
        res.render('add-job.ejs', {
            title: "ברוכים הבאים למערכת כנעאן כח אדם | הוסף משרה חדשה"
            ,message: ''
        });
    },
    addJob: (req, res) => {
        if (!req.files) {
            return res.status(400).send("No files were uploaded.");
        }

        let message = '';
        let jobName = req.body.jobName;
       
	    let datee = req.body.datee;
		
        let type = req.body.type;
        let emp = req.body.emp;
		
		let address = req.body.address;
		let description = req.body.description;
		let requi = req.body.requi;
		let email = req.body.email;
		let statuss = req.body.statuss;
		 
		let what = req.body.what;
		let wheree = req.body.wheree;
		
        let jobNumber = req.body.number;
        let uploadedFile = req.files.image;
        let img_name = uploadedFile.name;
        let fileExtension = uploadedFile.mimetype.split('/')[1];
        img_name = img_name + '-' + Date.now()+jobName +  '.' + fileExtension;
		
		

        let jobNumberQuery = "SELECT * FROM `job` WHERE jobnumber = '" + jobNumber + "'";

        db.query(jobNumberQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'מספר משרה כבר קיים';
                res.render('add-job.ejs', {
                    message,
                    title: "ברוכים הבאים למערכת כנעאן כח אדם | הוסף משרה חדשה"
                });
            } else {
                // check the filetype before uploading it
                if (uploadedFile.mimetype === 'image/png' || uploadedFile.mimetype === 'image/jpeg' || uploadedFile.mimetype === 'image/gif') {
                    // upload the file to the /public/assets/img directory
                    uploadedFile.mv(`public/assets/img/${img_name}`, (err ) => {
                        if (err) {
                            return res.status(500).send(err);
                        }
                        // send the player's details to the database
                        let query = "INSERT INTO `job` (namee, datee, typee, emp, img, jobnumber,address,description,req,email,status,what,wheree) VALUES ('" +
                            jobName + "', '" + datee + "', '" + type + "', '" + emp + "', '" + img_name + "', '" + jobNumber + "', '" + address + "', '" + description + "', '" + requi + "', '" + email + "', '" + statuss + "', '" + what + "', '" + wheree + "')";
                        db.query(query, (err, result) => {
                            if (err) {
                                return res.status(500).send(err);
                            }
                            res.redirect('/');
                        });
                    });
                } else {
                    message = "Invalid File format. Only 'gif', 'jpeg' and 'png' imgs are allowed.";
                    res.render('add-job.ejs', {
                        message,
                        title: "ברוכים הבאים למערכת כנעאן כח אדם | הוסף משרה חדשה"
                    });
                }
            }
        });
    },
    editJobPage: (req, res) => {
        let jobId = req.params.id;
        let query = "SELECT * FROM `job` WHERE id = '" + jobId + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-job.ejs', {
                title: "ערוך משרה"
                ,job: result[0]
                ,message: ''
            });
        });
    },
    editJob: (req, res) => {
        let jobId = req.params.id;
        let jobName = req.body.jobName;
        let datee = req.body.datee;
        let type = req.body.type;
        let emp = req.body.emp;
		
		let address = req.body.address;
        let requi = req.body.requi;
        let description = req.body.description;
        let email = req.body.email;
		let statuss = req.body.statuss;
		let what = req.body.what;
		let wheree = req.body.wheree;
		

        let query = "UPDATE `job` SET `namee` = '" + jobName + "', `datee` = '" + datee + "', `typee` = '" + type + "', `emp` = '" + emp + "', `address` = '" + address + "', `description` = '" + description + "', `req` = '" + requi + "', `email` = '" + email + "', `status` = '" + statuss + "', `what` = '" + what + "', `wheree` = '" + wheree + "' WHERE `job`.`id` = '" + jobId + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    },
    deleteJob: (req, res) => {
        let jobId = req.params.id;
        let getimgQuery = 'SELECT img from `job` WHERE id = "' + jobId + '"';
        let deleteUserQuery = 'DELETE FROM job WHERE id = "' + jobId + '"';

        db.query(getimgQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }

            let img = result[0].img;

            fs.unlink(`public/assets/img/${img}`, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }
                db.query(deleteUserQuery, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/');
                });
            });
        });
    }
};
