# we have 3 cases:
# when m is 00
#     then we have o'clock
# when m is less than or equal to 30
#     then we have h pas the minutes
# when m are grater than 30
#     then we have h increasing by 1 and 60 less minutes


def timeInWords(h, m)
    time = 
    {
        1 => 'one', 2 => 'two', 3 => 'three', 4 => 'four', 5 => 'five', 6 => 'six', 
        7 => 'seven', 8 => 'eight', 9 => 'nine', 10 => 'ten', 11 => 'eleven', 
        12 => 'twelve', 13 => 'thirteen', 14 => 'fourteen', 15 => 'quarter', 
        16 => 'sixtenn', 17 => 'seventeen', 18 => 'eighteen', 19 => 'nineteen', 
        20 => 'twenty', 21 => 'twenty one', 22 => 'twenty two', 
        23 => 'twenty three', 24 => 'twenty four', 25 => 'twenty five', 26 => 'twenty six', 
        27 => 'twenty seven', 28 => 'twenty eight', 29 => 'twenty nine', 30 => 'half'
    }
    minute = (m == 15 or m == 30 or m == 45) ? '' : m < 10 ? ' minute' : ' minutes'

    case m
    when 00
        p "#{time[h]} o' clock"
    when 1..30
        p "#{time[m]}#{minute} past #{time[h]}"
    else
        min = 60-m; hs = h+1
        p "#{time[min]}#{minute} to #{time[hs]}"
    end
end

timeInWords(5, 45)
