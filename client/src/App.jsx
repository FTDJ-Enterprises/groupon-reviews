import React from "react";
import ReviewList from "./ReviewList.jsx";

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
        <h1>Customer Reviews</h1>
        <ReviewList review={this.state.reviews} />
      </div>
    );
  }
}

export default App;
