﻿var i;
i = 1;
while ((i < 100)) {
    if (((i % 3) === 0)) {
        if (((i % 5) === 0)) {
            console.log('FizzBuzz');
        } else {
            console.log('Fizz');
        }
    } else {
        if (((i % 5) === 0)) {
            console.log('Buzz');
        } else {
            console.log((i.toString()));
        }
    }
    i += 1;
}