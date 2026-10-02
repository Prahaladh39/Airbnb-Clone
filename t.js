function calculateScore(a, b, c) {
  var total = a * b;
  var difference = total - c;
  var result = difference + 10;

  // simulate some async work
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (result >= 0) {
        resolve(result);
      } else {
        reject("Calculation failed");
      }
    }, 1000);
  });
}
