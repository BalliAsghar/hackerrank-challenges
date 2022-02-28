function diagonalDifference(arr) {
  // Write your code here
  let primaryDiagonal = [];
  let secondaryDiagonal = [];

  for (let i = 0; i < arr.length; i++) {
    primaryDiagonal.push(arr[i][i]);
    secondaryDiagonal.push(arr[i][arr.length - i - 1]);
  }

  // get the sum of each diagonal
  const primaryNum = primaryDiagonal.reduce((prev, curr) => prev + curr, 0);
  const secondaryNum = secondaryDiagonal.reduce((prev, curr) => prev + curr, 0);

  // return the difference
  return Math.abs(primaryNum - secondaryNum);
}
