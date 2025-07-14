function fibs(n) {
  const arr = [0, 1];

  while (arr.length < n) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  }

  return n > 1 ? arr : n > 0 ? [0] : [];
}

function fibsRec(n, arr = [0, 1]) {
  if (arr.length >= n) {
    return n > 1 ? arr : n > 0 ? [0] : [];
  }

  arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  return fibsRec(n, arr);
}

console.log(`Iterative version: ${fibs(13)}`);
console.log(`Recursve version: ${fibsRec(13)}`);
