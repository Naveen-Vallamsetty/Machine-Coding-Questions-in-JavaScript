/*

Write a function that returns the first non-repeating character in a string. 

Given a string S of lowercase English letters, the task is to find the index of the first non-repeating character. If there is no such character, return -1.

Examples: 

Input: S = “geeksforgeeks”
Output: 5
Explanation: ‘f’ is the first character in the string which does not repeat.


Input: “aabbccc”
Output: -1
Explanation: All the characters in the given string are repeating 
*/

let nonRepeatingCharacterInString = (str) => {
  let charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let strLen = str.length;
  for (let i = 0; i < strLen; i++) {
    if (charCount[str[i]] === 1) {
      return [i, str[i]];
    }
  }
  return -1;
};

console.log(nonRepeatingCharacterInString("geeksforgeeks"));
