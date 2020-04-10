const Review = require('../database/models').Review;
const Json2csvTransform = require("json2csv").Transform;
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const createReview = (req, res) => {
  const review = req.body;
  const id = parseInt(request.params.id);
  // Review.create(review, (err, response) => {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   res.json('sent');
  // });
};
const getReviews = (req, res) => {
  // console.log('test');
  const appId = Number(req.params.appId);

  //with postgres
  Review.findAll({where: {appId: appId}, raw: true, benchmark: true}).then((reviews) => {
    // if (err) {
    //   return console.log(err);
    // }
    console.log(reviews);
    res.status(200).json(reviews);
  });

  //with nosql

};

const exportReviewsCSV = (req, res) => {
  //
  const fields = ["id", "authorName", "authorAvatarUrl", "appId", "likes", "body", "rating", "hasReply", "replyName", "replyBody", "createdAt", "updatedAt"];
  const csvWriter = createCsvWriter({
    path: 'exportedReviews.csv',
    header: fields
  });
  for (let i = 0; i < 9999999; i++) {
    Review.findAll({where: {appId: i+1}, raw: true}).then((reviews) => {
      csvWriter.writeRecords(reviews);
    });
  }
};

const getSpecificReview = (req, res) => {
  // console.log('test');
  const reviewId = req.params.reviewId;
  console.log(req.params);
  Review.find({ id: reviewId }, (err, reviews) => {
    if (err) {
      return console.log(err);
    }
    res.json(reviews);
  });
};

const updateReview = (req, res) => {
  Review.findByIdAndUpdate(req.params.reviewId, req.params.review).then
  ((review) => {
    if (!review) {
      throw 'review not found';
    }
    res.send({message: 'review updated!', review});
  }).catch(error => {
    console.log(error);
    return res.status(404).send({message: 'Review not found'});
  });
  return res.status(500).send({message: `Error deleting review with id ${req.params.reviewId}`});
};

const deleteReview = (req, res) => {
  Review.findByIdAndRemove(req.params.reviewId).then(review => {
    if (!review) {
      throw 'review not found';
    }
    res.send({message: 'deleted'});
  }).catch(error => {
    console.log(error);
    return res.status(404).send({message: 'Review not found'});
  });
  return res.status(500).send({message: `Error deleting review with id ${req.params.reviewId}`});
};

//test func
// const getAllReviews = (req, res) => {
//   Review.find({}).then(reviews=>{
//     console.log(reviews);
//   });
// };

const addLikeToReview = (req, res) => {
  Review.findById(req.params.reviewId, (err, review) => {
    Review.updateOne({ _id: review._id}, { likes: review.likes + 1 }, (err, whatever) => {
      res.end();
    });
  });
};

exports.create = createReview;
exports.findOne = getSpecificReview;
exports.findAll = getReviews;
exports.update = updateReview;
exports.delete = deleteReview;
exports.addLike = addLikeToReview;
exports.getCSV = exportReviewsCSV;


//get all reviews with mongo, moved to bottom for space
// Review.find({ 'appId.$id': appId }, (err, reviews) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(reviews);
//   res.json(reviews);
// });