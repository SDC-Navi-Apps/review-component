const db = require('./index.js');
const Review = require('./Review.js');

const seedData = require('./data.json');

const seedDatabase = function() {
  return Review.create(seedData)
    .then(() => {
      return db.close();
    });
};

seedDatabase().then((res)=>{
  console.log("finished reviews");
});