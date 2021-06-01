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
    # get the remainder of dividing the previos step
    r = n - (a * s.length)
    # slice the array from 0 to the remainder
    sub = s.split('').slice(0,r)
    # count how many 'a' have the remainder
    coun_remainder = sub.count('a')
    # return the remainder plus the amount of 'a' in the rest of the string
    coun_remainder + a*num_of_a
end

p repeatedString(s,n)