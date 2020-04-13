const Review = require('../database/models').Review;
const Json2csvTransform = require("json2csv").Transform;
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const createReview = (req, res, next) => {
  Review.create({
    authorName: req.body.authorName,
    authorAvatarUrl: req.body.authorAvatarUrl,
    appId: req.body.appId,
    likes: req.body.likes,
    body: req.body.body,
    rating: req.body.rating,
    hasReply: false,
  }).then(() => {
    res.status(200);
  }).catch(error => {
    console.log("error on create review", error);
    res.status(500);
  });
};
const getReviews = (req, res, next) => {
  const appId = Number(req.params.appId);
  Review.findAll({where: {appId: appId}, raw: true}).then((reviews) => {
    res.status(200).json(reviews);
  }).catch((err) => {
    console.log("error on get reviews", err);
    next(err);
  });
};

const createReviewsCSV = (req, res) => {
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
  const reviewId = Number(req.params.reviewId);
  Review.findAll({where: { id: reviewId }}).then((review) => {
    res.status(200).json(review);
  }).catch(error => {
    console.log("error on get specific review", error);
    res.status(500).send({error: "specific review error"});
  });
};

const updateReview = (req, res) => {
  const reviewId = Number(req.params.reviewId);
  Review.update({
    authorName: req.body.authorName,
    authorAvatarUrl: req.body.authorAvatarUrl,
    appId: req.body.appId,
    likes: req.body.likes,
    body: req.body.body,
    rating: req.body.rating
  },
  {
    where: {
      id: reviewId
    }
  }).then((review) => {
    res.status(200).json({message: 'review updated!'});
  }).catch(error => {
    console.log(error);
    res.status(500).send({message: 'Review update failed'});
  });
};

const deleteReview = (req, res) => {
  const reviewId = Number(req.params.reviewId);
  Review.destroy({
    where: {id: reviewId},
    // returning: true
  }).then(review => {
    res.status(200).json({message: 'review deleted!'});
  }).catch(error => {
    console.log(error);
    res.status(500).send({message: 'Review not found'});
  });
};

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
exports.getCSV = createReviewsCSV;