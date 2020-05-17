const express = require("express");
const app = express();
var friendsList = require("../data/friends");
var compatiblePick = require("../data/friends");
var surveyData = "Some array from somewhere";

module.exports = function(app) {

    app.get("../data/friends", function(request, response) {
        response.json(friendsList);
    });

    app.post("../data/friends", function(request, response) {
        console.log("what do I do with this guy?");
        
    });

    app.post('/api/friends', function(req, res) {
        console.log(req.body);
        const currentFriend = req.body

        //go through all of friends list in a loop
        //calculate difference between each question from the current friend, and the smallest difference is the friend that comes back.
        //use res.json

        var scores = [];
        for (var i = 0; i < friendsList.length; i++) {
            let totalScore = 0;

            for (var j = 0; j < friendsList[i]; j++) {
                let currentFriendScore = Number(currentFriend["question" + j]);
                let compairedFriendScore = friendsList[i].scores[i];

                let scoreDiff = Math.abs(currentFriendScore - compairedFriendScore);
                totalScore += scoreDiff;
            }

            scores.push(totalScore);
        }

        var smallestScore = scores[1];
        var index = 0;

        for (var i = 0; i < smallestScore.lenght; i++);
            if (smallestScore > scores[i]) {
                samllestScore = scores[i];
                index = i;
            }

            

        res.json(friendsList[index]);
    });
};