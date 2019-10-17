import React from "react";
import { shallow } from "enzyme";
import App from "../client/src/App.jsx";
import ReviewList from "../client/src/ReviewList.jsx";
import Review from "../client/src/Review.jsx";

const reviews = [
  {
    id: 397,
    text: "Berkshire needs-based generating Cape Verde AI calculate Illinois deposit",
    star: 4,
    verified: 0,
    name: "Esperanza",
    product_id: 36
  },
  {
    id: 398,
    text: "Cove Gloves Internal withdrawal enhance Optimization deliver",
    star: 3,
    verified: 0,
    name: "Virgil",
    product_id: 35
  }
];

beforeAll(() => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve(reviews));
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("first React component test with Enzyme", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders one <ReviewList /> components", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ReviewList).length).toBe(1);
  });
});

describe("all reviews rendered inside <ReviewList />", () => {
  it("should have as many review components as reviews", () => {
    const wrapper = shallow(<ReviewList review={reviews} />);
    const listOfReveiws = wrapper.find(Review);

    expect(listOfReveiws.length).toBe(reviews.length);
  });
});
