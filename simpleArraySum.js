function simpleArraySum(ar) {
  // Write your code here
  let total = 0;
  for (let i = 0; i < ar.length; i++) {
    const element = ar[i];
    total += element;
  }
  return total;
}
