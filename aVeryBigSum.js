function aVeryBigSum(ar) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    const n = ar[i];
    sum += n;
  }
  return sum;
}

console.log(
  aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
);
