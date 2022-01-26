// O(n) Time | O(1) Space. Where n is the length of the coins array
function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);

  let currentChange = 0;
  coins.forEach(v => {
    if (v > currentChange + 1) return;
    currentChange += v;
  });


  return currentChange + 1;
}
