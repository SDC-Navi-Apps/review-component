module.exports = (app) => {
  const controller = require('./controller.js');
  // Create a new review
  app.post('/review', controller.create);

  // Retrieve all reviews
  app.get('/reviews/:appId', controller.findAll);

  // Retrieve a single review with reviewId
  app.get('/review/:reviewId', controller.findOne);
  app.get('/reviewdl', controller.getCSV);

  // Update a review with reviewId
  app.put('/review/:reviewId', controller.update);

  // Delete a review with reviewId
  app.delete('/review/:reviewId', controller.delete);

  //additional route to add like to review
  app.post('/likes/:reviewId', controller.addLike);
};