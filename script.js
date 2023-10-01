var input = document.getElementById("numberInput");
var reverseResult = document.getElementsByClassName("reverseResult")[0];
var palindromeResult = document.getElementsByClassName("palindromeResult")[0];
var numberForm = document.getElementById("numberForm");

var digit = 0;
var remainder = 0;
var reverseNum = 0;
var num; 
var tempNum; 
var answer = '';

var getValue = () => {
    num = parseInt(input.value); 
    tempNum = num; 
    return num;
}

var reverse = () => {
    reverseNum = 0; 

    while (tempNum > 0) {
        remainder = tempNum % 10;
        reverseNum = reverseNum * 10 + remainder;
        tempNum = Math.floor(tempNum / 10);
    }
    reverseResult.innerHTML = "Reversed Number: " + reverseNum; 
}

var palindrome = () => {
    if (tempNum === num) { 
        answer = "Number is a Palindrome";
    } else {    
        answer = "Number is not a Palindrome";
    }
    palindromeResult.innerHTML = answer;
}

var main = () => {
    getValue();
    reverse();
    palindrome();
}

main();
