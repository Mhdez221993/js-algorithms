// O(b^2*r) Time | O(b) Space
// function distanceBetween(a, b) {
//   return Math.abs(a - b)
// }

// function getIndxMinValue(array) {
//   let index = 0;
//   let minValue = Infinity;

//   for(let i = 0; i < array.length; i++) {
//     let curr = array[i]

//     if (curr < minValue) {
//       minValue = curr
//       index = i
//     }
//   }

//   return index
// }

// function apartmentHunting(blocks, reqs) {
//   let maxDistanceAtBlock = new Array(blocks.length).fill(-Infinity)

//   for(let i = 0; i < blocks.length; i++) {
//     for(req of reqs) {
//       let closestRequest = Infinity

//       for(let j = 0; j < blocks.length; j++) {

//         if(blocks[j][req]) {
//           closestRequest = Math.min(closestRequest, distanceBetween(i, j))
//         }
//       }

//       maxDistanceAtBlock[i] = Math.max(maxDistanceAtBlock[i], closestRequest)
//     }
//   }

//   return getIndxMinValue(maxDistanceAtBlock)
// }


// O(br) Time | O(br) Space
function distanceBetween(a, b) {
  return Math.abs(a - b)
}

function getMinDistanceFromBlocks(blocks, req) {
  let minDistances = new Array(blocks.length).fill(Infinity)
  let closestReqIndx = Infinity

  for(let i = 0; i < blocks.length; i++) {
    if (blocks[i][req]) {
      closestReqIndx = i
    }
    minDistances[i] = distanceBetween(i, closestReqIndx)
  }

  for(let i = blocks.length - 1; i >= 0; i--) {
    if (blocks[i][req]) {
      closestReqIndx = i
    }
    minDistances[i] = Math.min(minDistances[i], distanceBetween(i, closestReqIndx))
  }

  return minDistances
}

function getMaxDistanceFromBlocks(blocks, minDistanceFromBlocks) {
  let maxDistances = new Array(blocks.length).fill(0)
  for(let i = 0; i < blocks.length; i++) {
    minDistanceFromBlocks.forEach(min => {
      maxDistances[i] = Math.max(min[i], maxDistances[i])
    })
  }

  return maxDistances
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
  const minDistanceFromBlocks = reqs.map(req => getMinDistanceFromBlocks(blocks, req))
  const maxDistanceFromBlocks = getMaxDistanceFromBlocks(blocks, minDistanceFromBlocks)
  return getIndxMinValue(maxDistanceFromBlocks)
}

module.exports = apartmentHunting;