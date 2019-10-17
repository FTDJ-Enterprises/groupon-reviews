import React from "react";
import Review from "./Review.jsx";

const ReviewList = props => {
  return (
    <div>
      {props.reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
