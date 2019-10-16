const data = require("../database_reviews/database.js");
const request = require("supertest");
const app = require("../server/server.js");

beforeAll(async () => {
  await data.query(
    "CREATE TABLE reviews (id INT NOT NULL AUTO_INCREMENT, text VARCHAR(255) NOT NULL, star INT, verified TINYINT(1), name VARCHAR(255), date VARCHAR(255), product_id INT NOT NULL, PRIMARY KEY (id))"
  );
});

beforeEach(async () => {
  await data.query(
    "LOAD DATA LOCAL INFILE 'testReview.csv' INTO TABLE reviews FIELDS TERMINATED BY ',' LINES TERMINATED BY ',' (text, star, verified, name, date, product_id);"
  );
});
afterEach(async () => {
  await data.query("DELETE FROM reviews");
});

afterAll(async () => {
  await data.query("DROP TABLE reviews");
  data.end();
});

// describe("sample test", () => {
//   test("anything", function() {
//     console.log("env", process.env.NODE_ENV);
//     expect(true).toEqual(true);
//   });
// });

describe("GET /api/:id/reviews", () => {
  test("It should respond with review infos for the product", done => {
    request(app)
      .get("/api/0/reviews")
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body.length).toEqual(12);
        done();
      });
  });
});
