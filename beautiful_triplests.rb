arr = [1, 2, 4, 5, 7, 8, 10]
# arr = [1, 6, 7, 7, 8, 10, 12, 13, 14, 19]
d = 3

def beautifulTriplets(d, arr)
    # declare beatufull number
    beatifull = 0
    arr.each do |v|
        beatifull += 1 if arr.include?(v+d) and arr.include?(v+d+d)
    end
    beatifull
end

p beautifulTriplets(d, arr)