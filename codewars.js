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