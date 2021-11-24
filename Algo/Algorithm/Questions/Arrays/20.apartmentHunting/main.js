function distanceBetween(a, b) {
  return Math.abs(a - b)
}

function getIndxMinValue(array) {
  let index = 0;
  let minValue = Infinity;

  for(let i = 0; i < array.length; i++) {
    let curr = array[i]

    if (curr < minValue) {
      minValue = curr
      index = i
    }
  }

  return index
}

function apartmentHunting(blocks, reqs) {
  let maxDistanceAtBlock = new Array(blocks.length).fill(-Infinity)

  for(let i = 0; i < blocks.length; i++) {
    for(req of reqs) {
      let closestRequest = Infinity

      for(let j = 0; j < blocks.length; j++) {

        if(blocks[j][req]) {
          closestRequest = Math.min(closestRequest, distanceBetween(i, j))
        }
      }

      maxDistanceAtBlock[i] = Math.max(maxDistanceAtBlock[i], closestRequest)
    }
  }

  return getIndxMinValue(maxDistanceAtBlock)
}

let blocks = [
  {
    "gym": false,
    "office": true,
    "school": true,
    "store": false
  },
  {
    "gym": true,
    "office": false,
    "school": false,
    "store": false
  },
  {
    "gym": true,
    "office": false,
    "school": true,
    "store": false
  },
  {
    "gym": false,
    "office": false,
    "school": true,
    "store": false
  },
  {
    "gym": false,
    "office": false,
    "school": true,
    "store": true
  }
]

let reqs = ["gym", "office", "school", "store"]

console.log(apartmentHunting(blocks, reqs));