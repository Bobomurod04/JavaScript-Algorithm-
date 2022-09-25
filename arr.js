// const data = [[1, 2, 3], 'rot', [4, 5, 6, 7], true, false]
// const newData = []
// for (let i = 0; i < data.length; i++) {
//   if (Array.isArray(data[i])) {
//     data[i].forEach((arr) => {
//       newData.push(arr)
//     })
//   }
// }
// console.log(newData);

// const word = 'Uzbekistan';
// const wordLength = word.lastIndexOf((word.slice(-1))) + 1;
// console.log(wordLength);



// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = [];

// arr.forEach((num, i) => {
//   const NumI = num + i;
//   newArr.push(NumI);
// });

// console.log(newArr);


// let counter = 0;

// for(let i = 1; i <= 7; i++) {
//   counter+= i;
//   // console.log(counter)
// }
// console.log(counter);


// let arr1 = [2, -3, 5, 4];
// let arr2 = [9, 2, -7, 2]; 
// var arr1 = [2, -3, 5, 4];
// var arr2 = [9, 2, -7, 2]; 
// console.log(Math.max(...arr1, ...arr2));

// let str = "198507";
// console.log(str.slice(1, 3));
// console.log(str.split(1, 3));
// console.log(Array.from(str));

// function multiTable( numb ) {
//   result = '';
//   for(let i = 0; i <= 10; i++) {
//     result = result + `${numb} * ${i} = ${i*numb}${i == 10 ? '' : '\n'}`;
//   }
//   // return result;
// }
//   console.log(multiTable(7));

for(let i = 1; i <= 10; i++) {
  for(let j = 0; j <= 10; j++) {
    const multiTable = `${i} * ${j} = ${i*j}${j == 10 ? '\n\n' : ''}`
    console.log(multiTable);
  }
}
