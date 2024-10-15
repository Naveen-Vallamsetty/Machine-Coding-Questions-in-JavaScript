/*
Create a function to flatten an array of arrays

To flatten an array of arrays, you can write a function that iterates through the elements of the array and recursively or iteratively concatenates any nested arrays into a single, flat array
E.g.
 [1, [2, [3, 4], 5], [6, 7], 8];
Output: [1, 2, 3, 4, 5, 6, 7, 8]

Four appraches 
1. Recursively
2. Iterative
3. Reduce method
4. flat method
*/

/*
Recursively


let result = [];
let flattenArrayRecursively = (arr) => {
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flattenArrayRecursively(element);
    } else {
      result.push(element);
    }
  });
  return result;
};

console.log(flattenArrayRecursively([1, [2, [3, 4], 5], [6, 7], 8]));

*/

/*
Iterative Approach


let flattenArrayIterative = (arr) => {
  let stack = [...arr];
  let result = [];

  while (stack.length) {
    let next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.push(next);
    }
  }
  return result.reverse();
};

console.log(flattenArrayIterative([1, [2, [3, 4], 5], [6, 7], 8]));

*/

/*
Reduce method


let flattenArrayReduce = (arr) => {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(flattenArrayReduce(curr));
    } else {
      return acc.concat(curr);
    }
  }, []);
};

console.log(flattenArrayReduce([1, [2, [3, 4], 5], [6, 7], 8]));

*/

/*
flat method
*/

let getDepthOfArr = (arr) => {
  let depth = 1;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      depth = Math.max(depth, getDepthOfArr(arr[i]) + 1);
    }
  }
  return depth;
};

let flattenArrayFlat = (arr) => {
  let depth = getDepthOfArr(arr);
  return arr.flat(depth);
};

console.log(flattenArrayFlat([1, [2, [3, 4], 5], [6, 7], 8]));
