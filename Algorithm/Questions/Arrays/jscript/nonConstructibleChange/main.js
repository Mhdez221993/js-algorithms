function nonConstructibleChange(coins) {

  coins.sort((a,b) => a-b)

  let currentChange = 0
  coins.map(v => {
    if(v > currentChange+1) return currentChange+1
    currentChange += v
  })


  return currentChange+1;
}

let coins = [6, 4, 5, 1, 1, 8, 9]

console.log(nonConstructibleChange(coins));

// module.exports = nonConstructibleChange;
