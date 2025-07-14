function merge(listA, listB) {
  const finalList = [];
  let [i, j] = [0, 0];

  while (i < listA.length && j < listB.length) {
    if (listA[i] < listB[j]) {
      finalList.push(listA[i]);
      i++;
    } else if (listB[j] < listA[i]) {
      finalList.push(listB[j]);
      j++;
    } else {
      finalList.push(listA[i]);
      i++;
      finalList.push(listB[j]);
      j++;
    }
  }

  for (; i < listA.length; i++) {
    finalList.push(listA[i]);
  }

  for (; j < listB.length; j++) {
    finalList.push(listB[j]);
  }

  return finalList;
}

function mergeSort(list) {
  if (list.length <= 1) return list;

  return merge(
    mergeSort(list.slice(0, list.length / 2)),
    mergeSort(list.slice(list.length / 2)),
  );
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));

// Other tests (all work)
// console.log(mergeSort([]));
// console.log(mergeSort([1]));
// console.log(mergeSort([1, 2, 2]));
// console.log(mergeSort([6, 6, 6, 6]));
// console.log(mergeSort([9, 3, 7, 5, 6, 4, 8, 2, 1]));
// console.log(mergeSort([0, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
// console.log(mergeSort([-5000, 21, 5000, 0, -1, 1, 5001, 5000.5]));
