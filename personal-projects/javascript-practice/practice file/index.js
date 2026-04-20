// let arr = [12, 8, 29, 10, 83, 2, 59, 42, 69, 100];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
 

let arr = ["Miguel", 17, "Matthew", 18, "Lexa", 17, "MJ", 18];
let num = [];

for (let i = 0; i < arr.length; i++) {
  if (isNaN(arr[i])) {
    console.log(arr[i]);
  } else {
    console.log(arr[i]);
    arr[i] += num;
  }
}

console.log(num);