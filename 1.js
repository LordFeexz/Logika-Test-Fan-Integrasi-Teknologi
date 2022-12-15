const sell = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        count++;
        arr.splice(j, 1);
        i++;
        j = i;
      }
    }
  }
  return count;
};

console.log(sell([5, 7, 7, 9, 10, 4, 5, 10, 6, 5]));
console.log(sell([10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(sell([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]));
console.log(sell([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));

// utk soal pertama,karena hasil yg didapat adalah
// 10 20
// 20 30
// 10 50
// 10 20
// dan menurut saya sudah tepat,jd saya biarkan
