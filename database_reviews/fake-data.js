const faker = require("faker");
const fs = require("fs");

faker.seed(100);

let reviews = [];

//generating 100 set of reviews
for (let i = 0; i < 100; i++) {
  let numberOfReviews = faker.random.number({ min: 1, max: 20 });
  let numberOfWords = faker.random.number({ min: 5, max: 15 });
  for (let j = 0; j < numberOfReviews; j++) {
    reviews.push(
      `"${faker.random.words(numberOfWords)}"`,
      faker.random.number({ min: 1, max: 5 }),
      faker.random.number({ min: 0, max: 1 }),
      faker.name.firstName(),
      faker.date.recent(),
      i
    );
  }
}

fs.writeFile("fakeReview.csv", reviews, "utf8", err => {
  if (err) throw err;
  console.log("The file has been saved");
});
