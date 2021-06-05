
def chocolateFeast(n, c, m)
    # initially divide n / c an saved in w like this we have our first starting poin, now we know he has w bar
    w = n/c
    # initialize bars with the value of w
    bars = w
    # after that loop until w < m, we know he'll exchage until the amout of wrapper is less than m
    while w >= m
        # divide w / m, by doing so, you are saving the amout of bar he actually got
        bars += w/m
        # This step is the same as the previos one by this time yor add the remainder and modifing w
        w = (w/m) + (w%m)
    end
    # and return the numbers of bars
    bars
end
n, c, m = 15, 3, 2
puts chocolateFeast(n, c, m)