// var friends = require('./../../data/friends.js');

const questionList = {
  q1: 'Your mind is always buzzing with unexplored ideas and plans',
  q2: 'Generally speaking, you rely more on your experience than your imagination',
  q3: 'You find it easy to stay relaxed and focused even when there is some pressure',
  q4: 'You rarely do something just out of sheer curiosity',
  q5: 'People can rarely upset you',
  q6: 'It is often difficult for you to relate to other people\'s feelings',
  q7: 'In a discussion, truth should be more important than people\'s sensitivities',
  q8: 'You rarely get carried away by fantasies and ideas',
  q9: 'You think that everyone\'s views should be respected regardless of whether they are supported by facts or not',
  q10: 'You feel more energetic after spending time with a group of people'
}

var qCount = 1;
//creates the radio checkboxes horizontally
const radioHTML = (qCount) => {
  return (`<div class="form-check form-check-inline">Strongly Agree</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="question${qCount}" class="question${qCount}" value="1">
  <label class="form-check-label">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="question${qCount}" class="question${qCount}" value="2">
  <label class="form-check-label">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="question${qCount}" class="question${qCount}" value="3">
  <label class="form-check-label">3</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="question${qCount}" class="question${qCount}" value="4">
  <label class="form-check-label">4</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="question${qCount}" class="question${qCount}" value="5">
  <label class="form-check-label">5</label>
</div>
<div class="form-check form-check-inline">Strongly Disagree</div>`)};

// appending questions to page
const surveyMaker = () => {
  for (let key in questionList) {
    let newDiv = $(`<div class="m-4">`);
    newDiv.append(`<h4>Question ${qCount}</h4>`);
    newDiv.append(`<h5>${questionList[key]}`);
    newDiv.append(radioHTML(qCount));
    $('.questionField').append(newDiv);
    qCount++;
    console.log(qCount);
  }
};

surveyMaker();
