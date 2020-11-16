#variables i
i = 1
while (i < 100):
    if ((i % 3) == 0):
        if ((i % 5) == 0):
            print "FizzBuzz"
        else: 
            print "Fizz"
    else: 
        if ((i % 5) == 0):
            print "Buzz"
        else: 
            print str(i)
    i += 1
