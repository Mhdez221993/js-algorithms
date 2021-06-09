def stones(n, a, b)
    result = []
    arr = Array.new( n-1 ){ a } + Array.new( n-1 ){ b }
    i=0
    while i < n
        s = arr.slice( i, n-1 ).sum
        result.push( s )
        i += 1
    end
    result.join(' ')
end

n = 3
a = 1
b = 2
p stones(n, a, b)
