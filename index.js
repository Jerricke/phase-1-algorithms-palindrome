function isPalindrome(word) {
  // Write your algorithm here
  const reverse = [];
  for (let i = 0;  i < word.length; i++) {
    reverse.unshift(word[i])
  } 
  const palindrome = reverse.join('');
  if (palindrome === word) {
    return true
  } else return false
}

console.log(isPalindrome("something"));
/* 
  Add your pseudocode here
  take the word break each character of the word down 
  put it in an array
  then reverse the array 
  join the array

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
