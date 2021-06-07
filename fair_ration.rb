# find my first odd
# update odd variable to true and counter plus 2
# if counter < n then i can coutie oder wise return no

def fairRations(b)
    i, counter = 0, 0
    last = b.size-1
    while i < b.size
        if i == last and b[i]%2 != 0
            b[i] = b[i]+1 and b[i-1] = b[i-1]+1
            counter = b[i-1]%2 != 0 ? 'NO' : counter+2
        elsif b[i]%2 != 0
            b[i] = b[i]+1 and b[i+1] = b[i+1]+1
            counter += 2
        end
        i += 1
    end
    counter
end

# b = [2, 3, 3, 6, 7, 3]
# b = [1 , 1]
# b = [4, 5, 6, 7]
# n = 5




b = b.split.map(&:to_i)
p fairRations(b)