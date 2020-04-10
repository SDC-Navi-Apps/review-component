'use strict';
const chance = require('chance').Chance();
const ratingOptions = [
  0.5,
  1,
  1.5,
  2,
  2.5,
  3,
  3.5,
  4,
  4.5,
  5,
];

const reviewGenerator = (hasReply = false) => {
  const review = {
    authorName: chance.name(),
    authorAvatarUrl: chance.avatar({protocol: 'https', fileExtension: 'jpg'}),
    appId: chance.integer({min: 0, max: 1000000}),
    likes: chance.integer({min: 0, max: 120}),
    body: chance.paragraph(),
    rating: ratingOptions[chance.integer({min: 0, max: 9})],
    hasReply: hasReply
  };
  if (hasReply) {
    review.replyName = chance.name();
    review.replyBody = chance.paragraph();
  }
  return review;
};
const generateReviews = (max = 1000000) => {
  let generatedReviews = [];
  for (let i = 0; i < max; i++) {
    let hasReply = chance.integer({min: 0, max: 100});
    hasReply = (hasReply < 5);
    generatedReviews.push(reviewGenerator(hasReply));
    // console.log(generatedReviews[i]);
  }
  return generatedReviews;
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', generateReviews(), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', [{}], {});
  }
};
