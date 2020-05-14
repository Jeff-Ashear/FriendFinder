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
};