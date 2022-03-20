/*
Radix Sort
*/

/*
⚡ Radix sort is a special sorting algorithm that works on lists and numbers.
⚡ It never makes comparisons between elements.
⚡ It exploits the fact that information about the size of a number is encoded in the number of digits.
*/

/*
Radix Sort Helpers
⚡ In order to implement radix sort, it's helpful to build a few helper functions first : 
⚡ getDigit(num, place) : returns the digit in num at the given place value.
    getDigit(12345, 0); // 5
    getDigit(12345, 1); // 4
    getDigit(12345, 2); // 3
    getDigit(12345, 3); // 2

⚡ digitCount(num) : returns the number of digits in num.
    digitCount(1); // 1
    digitCount(25); // 2
    digitCount(345); // 3

⚡ mostDigits(nums) : Given an array of numbers, returns the number of digits in the largest numbers in the list.
    mostDigits([1234, 4, 66]); // 4
    mostDigits([1, 11111, 11]); // 5
    mostDigits([21, 14, 66]); // 2
*/

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

/*
Pseudocode
⚡ Define a function that accepts list of numbers.
⚡ Figure out how many digits the largest numeber has.
⚡ Look from k = 0 up to this largest number of digits.
⚡ For each iteration of the loop : 
    👉 Create buckets for each digit (0 to 9).
    👉 Place each number in the corresponding bucket based on its kth digit.
⚡ Replace our existing array with values in our buckets, starting with 0 and going up to 9.
⚡ return list at the end.
*/

/*
Time Complexity (Best) : O(nk)
Time Complexity (Average) : O(nk)
Time Complexity (Worst) : O(nk)
Space Complexity : O(n + k)
*/

function radixSort(arr) {
  const maxDigits = mostDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    const bucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], k);
      bucket[digit].push(arr[i]);
    }
    arr = [].concat(...bucket);
  }
  return arr;
}

console.log(radixSort([123, 5455, 12, 1, 65]));
