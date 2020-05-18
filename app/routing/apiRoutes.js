const express = require("express");
const app = express();
var friendsList = require("../data/friends");
var compatiblePick = require("../data/friends");
var surveyData = "Some array from somewhere";

module.exports = function(app) {

    app.get("/data/friends", function(request, response) {
        response.json(friendsList);
    });

    app.post("/data/friends", function(request, response) {
        console.log("what do I do with this guy?");
        
    });

    app.post('/api/friends', function(req, res) {
        console.log(req.body);
        const currentFriend = req.body

        //go through all of friends list in a loop
        //calculate difference between each question from the current friend, and the smallest difference is the friend that comes back.
        //use res.json

        var theChosenOne = {
            friend: {},
            totalDistance: 9999999999
        };

        for (var i = 1; i < friendsList.length; i++) {
            let totalScore = 0;



            var friend = friendsList[i];
            let fScores = friend.scores;
            let uScores = currentFriend.scores;
            let diffScores = [];
            for (var j = 0; j < fScores.length; j++) {
                let diff = Math.abs(parseInt(uScores[j]) - fScores[j]);
                console.log("the diff", diff)
                diffScores.push(diff);
                //let currentFriendScore = Number(currentFriend["question" + j]);
                // let compairedFriendScore = friendsList[i].scores[i];

                // let scoreDiff = Math.abs(currentFriendScore - compairedFriendScore);
                //totalScore += scoreDiff;
            }
            let difScores = diffScores.reduce((a,b)=> a+b)
            console.log(difScores)
            if(theChosenOne.totalDistance > difScores) {
                theChosenOne.totalDistance = difScores;
                theChosenOne.friend = friend; 
                console.log(friend)
                console.log("chose", theChosenOne);
            }
            //scores.push(totalScore);
        }

        // var smallestScore = scores[1];
        // var index = 0;

        // for (var i = 0; i < smallestScore.length; i++);
        //     if (smallestScore > scores[i]) {
        //         samllestScore = scores[i];
        //         index = i;
        //     }

        //     let partnerImage = friendsList[index].photo
        //     let partnerName = friendsList[index].name
        //     console.log("Partner photo: ", partnerImage);
        //     console.log("Partner name: ", partnerName);

            res.json(theChosenOne.friend)
        //res.json(friendsList[index]);
    });
};