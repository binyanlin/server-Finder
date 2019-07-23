const profiles = [
  {
    route: 'bradleycooper',
    name: 'Bradley Cooper' ,
    img: './../assets/images/bradley-cooper.png',
    scores: [5, 3, 2, 5, 4, 1, 2, 5, 5, 4]
  },
  {
    route: 'chrisevans',
    name: 'Chris Evans',
    img: './../assets/images/chris_evans.jpg',
    scores: [3, 4, 1, 2, 2, 5, 3, 2, 2, 3]
  },
  {
    route: 'chrishemsworth',
    name: 'Chris Hemsworth',
    img: './../assets/images/chris_hemsworth.jpeg',
    scores: [2, 2, 3, 4, 3, 2, 1, 4, 4, 1]
  },
  {
    route: 'letitiawright',
    name: 'Letitia Wright',
    img: './../assets/images/letitia_wright.png',
    scores: [1, 4, 2, 5, 3, 4, 1, 5, 2, 4]
  },
  {
    route: 'robertdownyjr',
    name: 'Robert Downy Jr.',
    img: './../assets/images/robert_downy_jr.jpeg',
    scores: [1, 5, 4, 5, 5, 1, 1, 5, 5, 5]
  },
  {
    route: 'scarlettjohannson',
    name: 'Scarlett Johannson',
    img: './../assets/images/scarlett_johannson',
    scores: [4, 1, 1, 2, 2, 4, 4, 4, 2, 3]
  },
  {
    route: 'tomholland',
    name: 'Tom Holland',
    img: './../assets/images/tom_holland.jpg',
    scores: [1, 3, 4, 5, 4, 4, 3, 5, 3, 2]
  }
]

const friendFind = function(surveyResult, profiles) {
  scoresArr = surveyResult.scores;
  let closestMatchScore = 100000;
  let bestMatch = {};
  profiles.forEach(maybeFriend => {
    let currentScore = 0;
    let friendArr = maybeFriend.scores;
    for(let i=0; i<10; i++) {
      currentScore += Math.abs(scoresArr[i]-friendArr[i]);
    }
    if (currentScore<closestMatchScore) {
      closestMatchScore = currentScore;
      bestMatch=maybeFriend
      // console.log(bestMatch);
    }
  })
  // console.log(bestMatch);
  // console.log(closestMatchScore);
  return bestMatch;
}


module.exports = {profiles, friendFind}