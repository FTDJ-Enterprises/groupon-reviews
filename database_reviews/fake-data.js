const faker = require("faker");
const fs = require("fs");
const db = require("./database.js");

faker.seed(100);

let reviews = [];

//generating 100 set of reviews
for (let i = 0; i < 100; i++) {
  let numberOfReviews = faker.random.number({ min: 1, max: 20 });
  for (let j = 0; j < numberOfReviews; j++) {
    let numberOfWords = faker.random.number({ min: 5, max: 15 });
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

const fakeDataIntoDb = async () => {
  await fs.writeFile("fakeReview.csv", reviews, "utf8", err => {
    if (err) throw err;
    console.log("The file has been saved");
  });
  await db.query(
    `LOAD DATA LOCAL INFILE 'fakeReview.csv' INTO TABLE reviews FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY ',' (text, star, verified, name, date, product_id);`
  );
  db.end();
};
fakeDataIntoDb();
