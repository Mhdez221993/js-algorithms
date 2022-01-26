def isToeplitz(arr)
  return true if arr.length == 1

  i = 1
  j = 1

  while i < arr.length
    return true if arr[i].length == 1

    while j < arr[i].length
      return false if arr[i][j] != arr[i - 1][j - 1]

      j += 1
    end

    i += 1
  end

  true
end

array_1 = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [6, 5, 1, 2]
]

array_2 = [
  [1, 2, 3, 4],
  [5, 1, 9, 3],
  [6, 5, 1, 2]
]

puts isToeplitz(array_1)
puts isToeplitz(array_2)
