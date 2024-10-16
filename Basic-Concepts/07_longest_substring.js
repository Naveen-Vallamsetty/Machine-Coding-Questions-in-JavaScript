/*
Write a function that finds the longest substring without repeating characters.

Given a string s, find the length of the longest substring without repeating characters. 

Examples:

Input: “ABCBC”
Output: 3
Explanation: The longest substring without repeating characters is “ABC”

Input: “AAA”
Output: 1
Explanation: The longest substring without repeating characters is “A”

Input: “GEEKSFORGEEKS”
Output: 7 
Explanation: The longest substrings without repeating characters are “EKSFORG” and “KSFORGE”, with lengths of 7.

*/

let longestSubstringWithoutRepeating = (s) => {
  let charSet = new Set();
  let left = 0;
  let maxLength = 0;
  let subString = "";

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);

    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
      subString = s.slice(left, right + 1);
    }
  }

  return { length: maxLength, substring: subString };
};

console.log(longestSubstringWithoutRepeating("abcbc"));
console.log(longestSubstringWithoutRepeating("GEEKSFORGEEKS"));
console.log(longestSubstringWithoutRepeating("aaa"));
