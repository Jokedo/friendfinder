var friendData = require('../data/friends');
var path = require('path');


var totalDifference = 0;

module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friends);
    });


    app.post('api/friends', function(req, res){

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

         var userData = req.body;
         var userName = userData.name;
         var userImage = userData.image;
         var userScore = userData.scores;

         
         for (var i=0; i< friends.length; i++){

            console.log(friends[i].name);
            totalDifference = 0;

            for (var f=0; f< friends[i].scores[f]; f++){

                totalDifference += Math.abs(pareseInt(userScore[f]) - parseInt(friends[i.scores[f]]));

                if (totalDifference <= bestMatch.friendDifference){

                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
         } 

         friends.push(userData);

         res.json(bestMatch);
    });

}