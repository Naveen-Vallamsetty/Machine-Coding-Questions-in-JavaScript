/*
    Implement a function to reverse a string
    Srring: "Javascript"
    Reverse string: "Tpircsavaj"

    Make first letter capital in reverse string 
*/

let reverseString = (str) => {
  let reverseString = str.split("").reverse().join("");
  reverseString =
    reverseString.charAt(0).toUpperCase() +
    reverseString.slice(1).toLowerCase();

  return reverseString;
};

console.log(reverseString("JavaScript"));

/*

let reverseString = (str) => {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
    reversedString =
      reversedString.charAt(0).toUpperCase() +
      reversedString.slice(1).toLowerCase();
  }
  return reversedString;
};

console.log(reverseString("JavaScript"));

*/
