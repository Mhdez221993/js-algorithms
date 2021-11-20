function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);

  let currentChange = 0;
  coins.map(v => {
    if (v > currentChange + 1) return currentChange + 1;
    currentChange += v;
  });


  return currentChange + 1;
}

module.exports = nonConstructibleChange;
