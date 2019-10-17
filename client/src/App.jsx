import React from "react";
import ReviewList from "./ReviewList.jsx";
import styled from "styled-components";

const Title = styled.h1`
  font-family: "Open Sans", sans-serif;
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
    fetch(`/api/${randomProductId}/reviews/`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          reviews: data
        })
      );
  }

  render() {
    return (
      <div>
        <Title>Customer Reviews</Title>
        <ReviewList review={this.state.reviews} />
      </div>
    );
  }
}

export default App;
