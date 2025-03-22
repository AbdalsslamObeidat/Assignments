// let arr=[1,2,3,4,5];
// let res=arr.map(x=>x*3);
// console.log(res);

// let arr = [1, 2, 2, 3, 3, 4, 5];
// let Arr = arr.filter((value, index, arr) => arr.indexOf(value) === index);

// console.log(Arr);

let arr = [
    { name: "Hussam", age: 30 },
    { name: "Ali", age: 25 },
    { name: "Ahmad", age: 28 }
];

let Arr=arr.sort((a, b) => a.age - b.age);
console.log(Arr);