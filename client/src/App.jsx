import React from "react";
import ReviewList from "./ReviewList.jsx";
import styled from "styled-components";
import StarList from "./StarList.jsx";
import { calculateAvgReview, splitNum } from "./helper.js";

const Title = styled.h1`
  font-family: "Open Sans", sans-serif;
  margin-bottom: 0px;
`;

const InLine = styled.div`
  display: flex;
  flex-direction: row;
`;

const Star = styled.div`
  padding: 10px 5px 0px 0px;
`;

const Text = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  margin-left: 15px;
  color: #0076d6;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    let randomProductId = Math.floor(Math.random() * 100);
    fetch(`http://localhost:3001/api/${randomProductId}/reviews/`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          reviews: data
        })
      )
      .catch(error => console.log(error));
  }

  render() {
    const { reviews } = this.state;
    return (
      <div>
        <Title>Customer Reviews</Title>
        <InLine>
          {reviews.length > 0 ? (
            <>
              <Star>
                <StarList avgReview={calculateAvgReview(reviews)} />
              </Star>
              <Text>{calculateAvgReview(reviews) + ` (${reviews.length} ratings)`}</Text>
            </>
          ) : (
            <p>There are no reviews...</p>
          )}
        </InLine>
        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;
