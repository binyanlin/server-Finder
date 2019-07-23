var express = require('express');
// var mysql = require('mysql');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/assets', express.static(path.join(__dirname, "./app/public/assets")));
// app.use('/data', express.static(path.join(__dirname, "./app/data")));

const friends  = require('./app/data/friends.js')

// var exphbs = require("express-handlebars");
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/index.html"));
});

app.get('/survey', function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.post('/api/survey', function(req, res) {
  let surveyResult = req.body;
  surveyResult.route = surveyResult.name.replace(/\s+/g, "").toLowerCase();
  surveyResult.scores = surveyResult.scores.map(score => parseInt(score));
  //run function calculate friend
  finalFriend = friends.friendFind(surveyResult, friends.profiles);
  res.send(finalFriend);
  friends.profiles.push(surveyResult);
  console.log(friends.profiles);
})


app.listen(PORT, () => console.log("listening on port http://localhost:" + PORT))
