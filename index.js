function hasTargetSum(array, target) {
  // Write your algorithm here

  const complements = new Set(); //create an empty set to track complements

  for (let num of array) {
    const complement = target - num;
    if (complements.has(complement)) {
      return true;
    }
    complements.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  creating a set and checking for complements takes constant time o(1)
  o(n) where n is the length of input array
  c
*/

/* 
  Add your pseudocode here

  Create an empty set to store complements
  Iterate through each element in the array
  Calculate the complement required to reach the target
  Check if the complement exists in the set
  if complements contains complement return true
  add the current complement to the set of complements

*/

/*
  Add written explanation of your solution here

  our solution has a function that checks whether there exists a pair of elements in the array that sums up to the target value. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
