// O(n^2) time | O(n) space - where n is the number of points.
function initilizeColumns(points) {
  let columns = {}
  for (let i = 0; i < points.length; i += 1) {
    let [x, y] = points[i]
    if (!columns[x]) {
      columns[x] = []
    }
    columns[x] = [...columns[x], y]
  }

  return columns
}

function minimumAreaRectangle(points) {
  const columns = initilizeColumns(points)
  let minumumAreaFound = Infinity
  const edgesParallelToYAxis = {}

  const sortedColumns = Object.keys(columns)
    .map(col => parseInt(col))
    .sort((a, b) => a - b)

  for (const x of sortedColumns) {
    const yValuesInCurrentColumn = columns[x].sort((a, b) => a - b)

    for (let currIdx = 0; currIdx < yValuesInCurrentColumn.length; currIdx += 1) {
      const y2 = yValuesInCurrentColumn[currIdx]
      for (let prevIdx = 0; prevIdx < currIdx; prevIdx++) {
        const y1 = yValuesInCurrentColumn[prevIdx]
        const pointString = y1.toString() + ':' + y2.toString()

        if (pointString in edgesParallelToYAxis) {
          const currArea = (x - edgesParallelToYAxis[pointString]) * (y2 - y1)
          minumumAreaFound = Math.min(minumumAreaFound, currArea)
        }

        edgesParallelToYAxis[pointString] = x
      }
    }
  }

  return minumumAreaFound !== Infinity ? minumumAreaFound : 0
}

