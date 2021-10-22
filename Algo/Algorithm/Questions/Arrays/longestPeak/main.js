function longestPeak(array) {
  let currentPeak = 1
  let hightestPeak = 0
  let peak = false
  let atleatOnePeak = false;

  for(let i = 1; i < array.length; i++) {
    let curr = array[i]
    let prev = array[i - 1]

    if(curr > prev) {

      if(peak){
        currentPeak = 2
        peak = false

      } else {
        currentPeak++
      }

    } else if(curr < prev && currentPeak > 1) {
      currentPeak++
      peak = true
      atleatOnePeak = true

    } else {
      currentPeak = 1
    }

    hightestPeak = currentPeak > hightestPeak ? currentPeak : hightestPeak
  };

  return atleatOnePeak ? hightestPeak : 0
}

module.exports = spiralTraverse;
