import React from "react";
import StarIcon from "./StarIcon.jsx";
import VerifiedIcon from "./VerifiedIcon.jsx";

const Review = props => {
  //depends on review score, only first few star will be need to be filled
  let filedStars = [];
  let numOfstar = props.review.star;
  let numOfUnfiledStar = 5 - numOfstar;
  let unfiledStars = [];
  for (let i = 0; i < numOfstar; i++) {
    filedStars.push(<StarIcon fill key={i} />);
  }
  for (let j = 0; j < numOfUnfiledStar; j++) {
    unfiledStars.push(<StarIcon key={j + numOfstar} />);
  }
  let stars = filedStars.concat(unfiledStars);

  return (
    <div>
      <div className="firstLine">
        {stars}
        <p>{props.review.name}</p>
        {props.review.verified ? (
          <p>
            <VerifiedIcon />
            &nbsp; Verified Purchaser
          </p>
        ) : null}
        <p>{props.review.date.substring(4, 15)}</p>
      </div>
      <p>{props.review.text}</p>
    </div>
  );
};

export default Review;
