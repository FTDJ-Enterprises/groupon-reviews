import React from "react";
import StarIcon from "./StarIcon.jsx";
import VerifiedIcon from "./VerifiedIcon.jsx";
import styled from "styled-components";

const Text = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  font-size: 14px;
  ${props => (props.margin ? "margin-left: 15px" : null)};
  color: ${props => (props.color ? props.color : "black")};
`;

const Star = styled.div`
  padding: 10px 5px 0px 0px;
`;

const InLine = styled.div`
  display: flex;
  flex-direction: row;
  ${props => (props.firstLine ? "justify-content: space-between" : null)}
`;

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
      <InLine firstLine className="firstLine">
        <InLine>
          <Star>{stars}</Star>
          <Text bold>{props.review.name}</Text>
          {props.review.verified ? (
            <Text margin color="#a5a8ab">
              <VerifiedIcon />
              &nbsp;Verified Purchaser
            </Text>
          ) : null}
        </InLine>
        <Text>{props.review.date.substring(4, 15)}</Text>
      </InLine>
      <Text>{props.review.text}</Text>
    </div>
  );
};

export default Review;
