arr = [5, 5, 2, 1, 5]
def equalizeArray(arr)
    # find the unique numbers
    # use map to iterate throug those uniques values
    # again use the original array but this time to count the uniques values
    # from the returned array take the max number and that is the most repeated number
    most_repeated_number = arr.uniq.map{|v| arr.count(v)}.max
    # substract from the array the amount of most repeated number
    arr.size - most_repeated_number
end

O(n)