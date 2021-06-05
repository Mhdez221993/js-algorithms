# initially divide n / c an saved in w
# after that loop until w < m
# divide w / m
# add the remaider to m
# and return the numbers of bars

def chocolateFeast(n, c, m)
    w = n/c
    bars = w
    while w >= m
        bars += w/m
        w = (w/m) + (w%m)
    end
    bars
end
n, c, m = 15, 3, 2
puts chocolateFeast(n, c, m)