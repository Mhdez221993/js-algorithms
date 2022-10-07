// O(br) time | O(br) space - where b is the number of blocks and r is the number of requirements.
function distanceBetween(a, b) {
  return Math.abs(a - b);
}

function getMinDistanceFromBlocks(blocks, req) {
  const minDistances = new Array(blocks.length).fill(Infinity);
  let closestReqIndx = Infinity;

  for (let i = 0; i < blocks.length; i += 1) {
    if (blocks[i][req]) {
      closestReqIndx = i;
    }
    minDistances[i] = distanceBetween(i, closestReqIndx);
  }

  for (let i = blocks.length - 1; i >= 0; i -= 1) {
    if (blocks[i][req]) {
      closestReqIndx = i;
    }
    minDistances[i] = Math.min(minDistances[i], distanceBetween(i, closestReqIndx));
  }

  return minDistances;
}

function getMaxDistanceFromBlocks(blocks, minDistanceFromBlocks) {
  const maxDistances = new Array(blocks.length).fill(0);
  for (let i = 0; i < blocks.length; i += 1) {
    minDistanceFromBlocks.forEach(min => {
      maxDistances[i] = Math.max(min[i], maxDistances[i]);
    });
  }

  return maxDistances;
}

function getIndxMinValue(array) {
  let index = 0;
  let minValue = Infinity;

  for (let i = 0; i < array.length; i += 1) {
    const curr = array[i];

    if (curr < minValue) {
      minValue = curr;
      index = i;
    }
  }

  return index;
}

function apartmentHunting(blocks, reqs) {
  const minDistanceFromBlocks = reqs.map(req => getMinDistanceFromBlocks(blocks, req));
  const maxDistanceFromBlocks = getMaxDistanceFromBlocks(blocks, minDistanceFromBlocks);
  return getIndxMinValue(maxDistanceFromBlocks);
}
