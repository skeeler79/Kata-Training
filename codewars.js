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

//can be refactored to:
function minMax(arr) {
    let newArr = [];
    newArr.push(Math.min(...arr));
    newArr.push(Math.max(...arr));
    return newArr;

}

function FirstReverse(str) {
    //separate string into an array, reverse, and join


    return str.split('').reverse().join('');

}

console.log(FirstReverse("Hello World!"))

//P - takes in a string
//R - returns the reverse of the string
//E- Hello --> olleH
//



// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
    let stringN = String(n);
    let decOrd = stringN.split('').sort(function (a, b) { return b - a }).join('');
    return Number(decOrd)
}


console.log(descendingOrder(42145), 54421)




// Have the function LongestWord(sen) take the sen parameter being passed and 
// return the longest word in the string. If there are two or more words that 
// are the same length, return the first word from the string with that length. 
// Ignore punctuation and assume sen will not be empty. Words may also contain 
// numbers, for example "Hello world123 567"

function LongestWord(sen) {
    //remove punctuation and split the sentence
    //loop through the array
    //compare the length of each word and save to variable
    let splitSen = sen.replace(/[^\w\s\']|_/g, "").split(' ');
    let longestWord = '';
    for (let i = 0; i < splitSen.length; i++) {
        if (splitSen[i].length > longestWord.length) {

            longestWord = splitSen[i];
        }
    }

    // code goes here  
    return longestWord;

}

// keep this function call here 
console.log(LongestWord("The quick red*&^%((())) fox"));




// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

// detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"

function detectWord(str) {
    let wordArr = '';
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i])
        if (str[i].toLowerCase() == str[i]) {

            wordArr += str[i]
        }

    }
    return wordArr;
}
console.log(detectWord("UcUNFYGaFYFYGtNUH"), 'cat');
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"), 'burglur');
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"), 'embezzlement')


// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
  let numArr = [] //new array has to be within the function so that it clears with each new function call
  // Return a new array with the strings filtered out
  for (let i = 0; i < l.length; i++){
    if (Number.isInteger(l[i]))
    numArr.push(l[i]);

    }
   return numArr
  }


console.log(filter_list([1,2,'aasf','1','123',123]))

//refactored using .filter function

function filter_list(l) {
    return l.filter(Number.isInteger)
}
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]))


// Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

// {other person name } is {older than / younger than / the same age as} me.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(other) {
        // {other person name} is {older than / younger than / the same age as} me.
        if (other.age > this.age) {
            console.log(`${other.name} is older than me.`)
        } else if (other.age < this.age) {
            console.log(`${other.name} is younger than me.`)
        } else if (other.age === this.age) {
            console.log(`${other.name} is the same age as me.`)
        }

    }
}

p1 = new Person("Samuel", 24)
p2 = new Person("Joel", 36)
p3 = new Person("Lily", 24)

p1.compareAge(p2)
p2.compareAge(p1)
p1.compareAge(p3)

