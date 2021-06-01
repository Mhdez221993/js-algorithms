s = 'abcab'
n = 10

def repeatedString(s, n)
    if s.length == 1 && s[0] == 'a'
        return n
    end
    num_of_a = s.count('a')
    a = n/s.length
    r = n - (a * s.length)
    sub = s.split('').slice(0,r)
    coun_remainder = sub.count('a')
    coun_remainder + a*num_of_a
end

p repeatedString(s,n)