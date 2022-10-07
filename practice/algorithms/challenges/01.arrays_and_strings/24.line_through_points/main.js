// O(n^2) time | O(n) space - where n is the number of points
function getGraterCommondDivisor(num1, num2) {
  let a = num1
  let b = num2
  while (true) {
    if (a === 0) return b
    if (b === 0) return a

    const temA = a
    a = b
    b = temA % b
  }
}

function getSlotesOfLinesBetweenPoints(p1, p2) {
  const [x1, y1] = p1
  const [x2, y2] = p2

  let slope = [1, 0]

  if (x1 !== x2) {
    let xDiff = x1 - x2
    let yDiff = y1 - y2

    let gcd = getGraterCommondDivisor(Math.abs(xDiff), Math.abs(yDiff))
    xDiff = Math.floor(xDiff / gcd)
    yDiff = Math.floor(yDiff / gcd)

    if (xDiff < 0) {
      xDiff *= -1
      yDiff *= -1
    }

    slope = [yDiff, xDiff]
  }

  return slope
}

function createHashableKey(rise, run) {
  return `${rise}:${run}`
}

function lineThroughPoints(points) {
  maxNumberOfPoints = 1

  for (let i = 0; i < points.length; i += 1) {
    let slopes = {}
    let p1 = points[i]

    for (let j = i + 1; j < points.length; j += 1) {
      let p2 = points[j]

      let [rise, run] = getSlotesOfLinesBetweenPoints(p1, p2)
      let slopKey = createHashableKey(rise, run)

      if (!(slopKey in slopes)) slopes[slopKey] = 1

      slopes[slopKey]++
    }

    const currMaxtNumOfPoints = Object.values(slopes).reduce((a, b) => Math.max(a, b), 0);
    maxNumberOfPoints = Math.max(maxNumberOfPoints, currMaxtNumOfPoints)
  }

  return maxNumberOfPoints
}
