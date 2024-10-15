/*
Write a function to check whether two given strings are anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. 
For example, “abcd” and “dabc” are an anagram of each other.
listen - silent
*/

/*
let areAnagram = (str1, str2) => {
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  console;
  if (str1 == str2) {
    return "Both string are anagrams to each other";
  } else {
    return "Both are not anagrams";
  }
};

console.log(areAnagram("abcd", "dcba"));
console.log(areAnagram("listen", "silent"));
*/

let areAnagram = (str1, str2) => {
  if (str1.length != str2.length) return "Both strings are not anagrams";
  let characters = {};
  for (let char of str1) {
    characters[char] = (characters[char] || 0) + 1;
  }

  for (let char of str2) {
    characters[char] = (characters[char] || 0) - 1;
  }

  for (let count of Object.values(characters)) {
    if (count != 0) {
      return "Both strings are not anagrams";
    } else {
      return "Both strings are anagrams";
    }
  }
};

console.log(areAnagram("abcd", "dcba"));
console.log(areAnagram("listen", "silent"));
console.log(areAnagram("hello", "world"));
