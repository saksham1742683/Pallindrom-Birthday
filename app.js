 function reverseString(str){
    let listOfChars = str.split('')
    let reverseChars= listOfChars.reverse()
    let reversedStr = reverseChars.join('');
    return reversedStr;

    // return str.split('').reverse().join('');  // can be in one line
 }

 function isPalindrome(str)
 {
    let reverse = reverseString(str)
    return str === reverse;
 }

console.log(isPalindrome("momo"));
console.log(isPalindrome("242"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("oppo"));