// // You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
    let middle;
    if (s.length % 2 == 0) {
        middle = (s.length) / 2
        console.log(s.substring(middle - 1, middle + 1))
    } else if (s.length % 2 == 1) {
        middle = (s.length) / 2
        console.log(s.substring(middle, middle + 1))
    }
}

getMiddle("test")

// // The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

function century(year) {

    console.log(Math.ceil(year / 100));
}

century(1901)



// Can you find the needle in the haystack ?

//     Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message(as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

function findNeedle(haystack) {

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            return `found the needle at position ${[i]}`
        }
    }
}


//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 9 squared is 81 and 1 squared is 1.

// Note: The function accepts an integer and returns an integer

//first, convert num into string and split the number into individual ints
//second, create array
//third, loop through array and square nums
//finally, concactonate the squared ints and convert into an int

function squareDigits(num) {
    //convert parameter into string and split
    let numString = num.toString();
    // numString.split('');

    //create an array from the split string
    let numArr = Array.from(numString);

    //square each number in the array and create a new array
    let squaredArr = []
    for (let i = 0; i < numArr.length; i++) {
        let squaredNum = Math.pow(numArr[i], 2);
        squaredArr.push(squaredNum);
    }


    //convert squaredArr back to string and loop through squared array, concoctanate and change back into an int

    let squaredString = squaredArr.toString()
    return Number(squaredString.split(',').join(''))

}


//examples:
console.log(squareDigits(24), '416')
console.log(squareDigits(456), '162536')
console.log(squareDigits(3112), '9114')



// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
    //take in an array of ints
    //add ints together
    let sum = array.reduce(function (prevVal, currentVal) {
        return prevVal + currentVal;
    }, 0); //0 is the initialValue, so if the array is empty, it will initialize at 0;

//determine if sum is odd or even
    if (sum % 2 == 0) {
        return "even";
    } else
        return "odd";
    
    //if array is empty, consider it 0/even
}

console.log(oddOrEven([0, 1, 4]), "odd")
console.log(oddOrEven([0]), "even")
console.log(oddOrEven([0, -1, -5]), "even")
console.log(oddOrEven([]), "even")



// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
    // separate and sort numerically
    let commaNums = numbers.split(' ').sort((a, b) => a - b);

    // create a new array to contain the largest and smallest int
    let newArr = [];
    newArr.push(commaNums[commaNums.length - 1]);
    newArr.push(commaNums[0]);

    //convert the new array into a string
    return newArr.join(' ');

}

console.log(highAndLow("1 2 3 4 5"), "5 1") // return "5 1"
highAndLow("1 2 -3 4 5"), "5 -3" // return "5 -3"
highAndLow("1 9 3 4 -5"), "9 -5"// return "9 -5"
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9") 


// Edabit Coding challenge
// find area of a triangle
function triArea(base, height) {
    let area = (base * height) / 2;
    return area;

}



// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    //create two new arrays, convert str into an arr
    let x = [];
    let o = [];
    strArr = str.toLowerCase().split('');
    //first, loop through the string and search for x's and o's and push into arrays
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === 'x') {
            x.push(i);
        } else if (strArr[i] === 'o') {
            o.push(i);
        }
    }
    //compare arrays and return boolean
    if (x.length == o.length) {
        return true;
    } else {
        return false;
    }
}

XO("ooxx")
// XO("xooxx") => false
// XO("ooxXm") => true
XO("zpzpzpp")
// => true // when no 'x' and 'o' is present should return true
XO("zzoo") 




// Given an integral number, determine if it's a square number, return true or false:

function isSquare(n) {
    return Number.isInteger(Math.sqrt(n));
    //return statement automatically returns a boolean 
    
    //original code:
    //let sqrt = Math.sqrt(n);
    //if (Number.isInteger(sqrt) === true){
        //return true
    // }else{
    //     return false
    // }
    //refactored:
    // if (Number.isInteger(Math.sqrt(n))){
    //   return true;
    // }else {
    //   return false;
    // }
    //further refactored to final code
}

console.log(isSquare(4), true);
console.log(isSquare(2), true);
console.log(isSquare(1), false);



// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
function minMax(arr) {
    let newArr = [];
    let sorted = arr.sort(function (a, b) { return a - b });
    let min = sorted[0];
    let max = sorted[sorted.length - 1];
    newArr.push(min);
    newArr.push(max);
    return newArr;
}


console.log(minMax([44, 3, 101, 5, 10]))