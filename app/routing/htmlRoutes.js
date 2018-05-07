var path = require('path');

module.exports = function(app){

    //GET request 
        app.get('/survey', function(req, res){
            res.sendFile(path.join(__dirname + '/../public/survey.html'));
        });
    
        // this defaults to home if not matching route is found
        app.use(function(req, res){
            res.sendFile(path.join(__dirname + '/../public/home.html'));
        });
    
    }