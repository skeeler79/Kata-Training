// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

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

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

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