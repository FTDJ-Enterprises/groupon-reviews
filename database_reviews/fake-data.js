const faker = require('faker')
const fs = require('fs')

faker.seed(100);

let reviews = [];

//generating 100 set of reviews
for (let i = 0; i < 100; i++) {
    const numberOfReviews = faker.random.number({min: 1, max: 20});
    let setOfreviews = [];
    for (let j = 0; j < numberOfReviews; j++) {
        let review = {
            text: faker.random.words(Math.ceil( Math.random()* 15)),
            star: faker.random.number({min: 1, max: 5}),
            verified: faker.random.number({min: 0, max: 1}),
            name: faker.name.firstName(),
            date: faker.date.recent(),
            product_id: i
        }
        setOfreviews.push(review);
    }
    reviews.push(setOfreviews);
}


