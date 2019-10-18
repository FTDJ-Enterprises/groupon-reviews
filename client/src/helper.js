export function calculateAvgReview(reviews) {
  const totalReview = reviews.reduce((total, scoreObj) => {
    return total + scoreObj.star;
  }, 0);
  return Math.round((totalReview / reviews.length) * 10) / 10;
}

export function splitNum(num) {
  let wholeNum = Math.trunc(num);
  let decimalNum = Math.trunc(Math.round((num - wholeNum) * 10));
  return [wholeNum, decimalNum];
}
