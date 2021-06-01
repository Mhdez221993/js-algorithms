s = 'a'
s = 'aba'
n = 10

def repeatedString(s, n)
    # if s.length is 1 return n
    if s.length == 1 && s[0] == 'a'
        return n
    end
    # count how many a in s
    num_of_a = s.count('a')
    # divide n times the lenngth of s to know how many time s repeted (without the remaider)
    a = n/s.length
    r = n%s.length
    count_r = [0..r].count('a')
    num_of_a * a + count_r
end

p repeatedString(s,n)