/*
    rules:
    "FizzBuzz" if i is divisible by 3 and 5.
    "Fizz" if i is divisible by 3.
    "Buzz" if i is divisible by 5.
    i if non of the above conditions are true.
*/


var fizzBuzz = function (n) {

    let output = '';
    let array = [];

    for (let i = 1; i <= n; i++) {

        //clear output each loop
        output = '';

        if (i % 3 == 0) {
            output += 'Fizz'
        };

        if (i % 5 == 0) {
            output += 'Buzz'
        };

        if (!output) {
            output += i;
        };


        array.push(output);

    };

    return array;


};


let resultArray = fizzBuzz(15);

console.log(resultArray);

