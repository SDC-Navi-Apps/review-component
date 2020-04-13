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
  5
];

const generateReview = (userContext, events, done) => {
  const reviewId = chance.integer({min: 1, max: 10000000});
  const authorName = chance.name();
  const authorAvatarUrl = chance.avatar({protocol: 'https', fileExtension: 'jpg'});
  const appId = chance.integer({min: 1, max: 1000000});
  const likes = chance.integer({min: 0, max: 120});
  const body = chance.paragraph();
  const rating = ratingOptions[chance.integer({min: 0, max: 9})];

  userContext.vars.reviewId = reviewId;
  userContext.vars.authorName = authorName;
  userContext.vars.authorAvatarUrl = authorAvatarUrl;
  userContext.vars.appId = appId;
  userContext.vars.likes = likes;
  userContext.vars.body = body;
  userContext.vars.rating = rating;

  return done();
};
const generateReviewId = (userContext, events, done) => {
  const reviewId = chance.integer({min: 1, max: 10000000});
  userContext.vars.reviewId = reviewId;
  return done();
};


module.exports = {
  generateReview,
  generateReviewId
};
