def workbook(n, k, arr)
    pages, special = 1, 0
    n.times do |i|
        curr, prev = arr[i], 1
        j = curr > k ? k : curr
        while j <= curr
            special += 1 if (prev..j).include?(pages)
            puts "#{prev}: #{j}: #{pages}"
            prev = j+1
            j += k
            pages += 1
        end

        if curr > k and curr%k != 0
            puts "#{curr-(curr%k)+1}: #{curr}: #{pages}"
            prev = curr-(curr%k)+1
            special += 1 if (prev..curr).include?(pages)
            pages += 1
        end
    end
    special
end

arr, n, k = [4, 2, 6, 1, 11], 5, 3

p workbook(n, k, arr)