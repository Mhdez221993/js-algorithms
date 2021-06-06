def workbook(n, k, arr)
    pages, special = 1, 0
    n.times do |i|
        curr, prev = arr[i], 1
        j = curr > k ? k : curr
        while j <= curr
            puts "#{prev}: #{j}: #{pages}"
            prev = j+1
            j += k
            pages += 1
        end
        
    end
    special
end

arr, n, k = [4, 2, 6, 1, 10], 5, 3

p workbook(n, k, arr)