// Getting familiar with EJS and the project folder/file structure.

// -----------------------------------------------
// Question 1
// -----------------------------------------------
const q1 = (req, res) => {
  // there is nothing to do here for this question

  res.render('pages/question1');
};

// -----------------------------------------------
// Question 2
// -----------------------------------------------
const q2 = (req, res) => {
  // pass this variable to the ejs file and render it in the answer box.
  const sentence = '<p>This is the way.</p>';

  res.render('pages/question2', {sentence});
};

// -----------------------------------------------
// Question 3
// -----------------------------------------------
const q3 = (req, res) => {
  // pass this information to ejs file and render it in the answer box.
  const homer = {
    imageUrl:
      'https://vignette.wikia.nocookie.net/simpsons/images/0/02/Homer_Simpson_2006.png',
    name: 'Homer Jay Simpson',
    dob: 'May 12, 1956',
    profession: 'Low-level Safety Inspector',
    favoriteFood: 'Donuts',
    favoriteBeverage: 'Duff Beer',
  };

  res.render('pages/question3', {homer});
};

// -----------------------------------------------
// Question 4
// -----------------------------------------------
const q4 = (req, res) => {
  const popularGirlNames = ['Olivia', 'Ruby', 'Emily', 'Grace', 'Jessica'];
  const topThree = popularGirlNames.splice(0,3);

  res.render('pages/question4', {topThree: topThree});
};

// For this exercise you need to create another const (topThree) for the original const. Use splice to change the contents of the array and then continue from previous exercises. 

// -----------------------------------------------
// Question 5
// -----------------------------------------------
const q5 = (req, res) => {
  const popularGirlNames = ['Olivia', 'Ruby', 'Emily', 'Grace', 'Jessica'];
  // const topFive = popularGirlNames.splice(0,5);
  //^This way is what I used to originally solve it^^//
  // res.render('pages/question5', {topFive: topFive});
  res.render('pages/question5', {popularGirlNames: popularGirlNames});
  //This is the way to do it forEach
};

// We export the functions so that they may be 'required' or imported in other files.
module.exports = { q1, q2, q3, q4, q5 };
