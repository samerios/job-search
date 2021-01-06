module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM `job` ORDER BY id ASC"; // query database to get all the jobs

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: "ברוכים הבאים למערכת כנעאן כח אדם | צפה במשרות"
                ,jobs: result
            });
        });
    },
};