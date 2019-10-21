import React from "react";
import StarIcon from "./StarIcon.jsx";
import HalfStar from "./HalfStar.jsx";
import { splitNum } from "./helper.js";

const StarList = props => {
  const [wholeNum, decimalNum] = splitNum(props.avgReview);
  const fullStar = [8, 9];
  const halfStar = [7, 6, 5, 4, 3];
  let stars = [];
  if (fullStar.includes(decimalNum)) {
    wholeNum++;
  }
  for (let i = 0; i < wholeNum; i++) {
    stars.push(<StarIcon fill key={i} />);
  }
  if (halfStar.includes(decimalNum)) {
    stars.push(<HalfStar key={99} />);
  }
  while (stars.length < 5) {
    stars.push(<StarIcon key={stars.length + 1} />);
  }

  return stars;
};

export default StarList;
