//let userSurveyResults = [1,2,3,4,5,5,4,3,2,1];
//let potentialMatches = friendList.scores[i];
//for (i = 0; i < frindList.length; i++) {
//     for (j = 0; j < friendList.scores[j]; j++) {
//         let difference = userSurveyResults[j] - friendList.scores[j];
//         if (differnce < 0) {
//             difference = difference * -1;
//         }
//         let totalDifference = difference + totalDifference;
//         return totalDifference;
//     }
// }



let name = "";
let scores = [];
let userData = {
    "name": name,
    "scores": []
}

$('#submitButton').on("click", function(e) {
    e.preventDefault();
    console.log("Clicked submit")
    name = $("#userName").val().trim();
    console.log("User Name: ", name);

});

//find the difference between the arrays:

let compatibiltiyRating = 0;
let thisFriend = frindList[i].name

function MinDifference(surveyArray, friendList[i]) {

    for (j = 0; j < surveyArray.lenght; j++) {
        
        absDiff = Math.abs(surveyArray[j] - frindList[j]);
        absDiff = absDiff++
        if (compatibiltiyRating < absDiff) {
            compatibiltiyRating = 
        }

    }

}


const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }))
  .use(express.json());
app.post('/api/friends', function(req, res) {
  const currentFriend = req.body;
  // go through all of friendslist in a loop
  // calculate the difference between each question from the currentFriend
  // smallest difference is the friend we'll send back
  // res.json()
  var scores = [];
  for (var i = 0; i < friendsList.length; i++) {
    let totalScore = 0;
    for (var j = 0; j < friendsList[i].scores.length; j++) {
      let currentFriendScore = Number(currentFriend['question' + j]);
      let comparedFriendScore = friendsList[i].scores[i];
      let scoreDiff = Math.abs(currentFriendScore - comparedFriendScore);
      totalScore += scoreDiff;
    }
    scores.push(totalScore);
  }
  var smallestScore = scores[i];
  var index = 0;
  for (var i = 0; i < scores.length; i++) {
    if (smallestScore > scores[i]) {
      smallestScore = scores[i];
      index = i;
    }
  }
  // getting the smallest value in the array
  // get its index
  // mostCompatibleFriend should be friendsList[index]
  // send that back in res.json()
  res.json(friendsList[index]);
  // res.redirect('/?' + JSON.stringify(friendsList[index]))
});