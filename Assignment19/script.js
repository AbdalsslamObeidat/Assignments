// let arr=[1,2,3,4,5];
// let res=arr.map(x=>x*3);
// console.log(res);

// let arr = [1, 2, 2, 3, 3, 4, 5];
// let Arr = arr.filter((value, index, arr) => arr.indexOf(value) === index);

// console.log(Arr);


// let arr = [1, 5, 9, 6, 3, 87, 72, 23];

// function rev(array) {
//     for (let i = 0; i < array.length / 2; i++) {
//         let temp = array[i];
//         array[i] = array[array.length - 1 - i];
//         array[array.length - 1 - i] = temp;
//     }
//     return array;
// }

// console.log(rev(arr)); 

// let arr = [1, 5, 9, 6, 3, 87, 72, 23];

// function find(array, target) {
//    array.sort((a,b)=>a-b);

//    let left=0;
//    let right=array.length-1;
//    while(left<right){
//     let sum=array[left]+array[right];
//     if(sum===target){
//         return [array[left],array[right]];
//     }
//     else if(sum<target){
//         left++;
//     }
//     else if(sum >target){
//         right--;
//     }
   
//    }
//    return null;
   
// }

// console.log(find(arr, 9)); 
















// Vowels
// function fun(array){
//     let count=0;
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]==='a'||array[i]==='e'||array[i]==='i'||
//             array[i]==='o'||array[i]==='u'||array[i]==='A'|
//             array[i]==='E'||array[i]==='I'||array[i]==='O'||array[i]==='U'){
//                 count++;
//             }
            
//     };
//     return count;
// }
// console.log(fun("ofkopkfrefefoollAIfriuhucb"));




// Even or Odd
// function evenOrOdd(arr){
//     arr.forEach(element => {
//         if(element%2===0){console.log("Even");}
//         else{console.log("Odd");}
//     });

// }
// let array=[1,5,7,3,6,8,9,45,74,76,43,2,2,,22];
// evenOrOdd(array);



// longest
// function longest(str) {
//     let words = str.split(" ");
//     let longestWord = "";

//     words.forEach(word => {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     });

//     return longestWord;
// }

// console.log(longest("hello fellow devs"));



// FizzBuzz
// let foo = [];

// for (let i = 1; i <= 50; i++) {
//    foo.push(i);
// }
// function fizzBuzz(arr){
//     arr.forEach(element => {
//         if(element%5&&element%3===0){console.log("FizzBuzz");}
//         else if(element%3===0){console.log("Fizz");}
//         else if(element%5===0){console.log("Buzz");}
//     });
// }
// fizzBuzz(foo);



// Second Largest
// let Arr=[6,4,2,5,8];
// function Sort(Arr){
//     for (let i = 1; i < Arr.length; i++){
//         for (let j = 0; j < i; j++){
//             if (Arr[i] < Arr[j]) {
//                 var x = Arr[i];
//                 Arr[i] = Arr[j];
//                 Arr[j] = x;
//             }
//         }
            
// }
// return Arr;
// }

// function largest(arr){
//     let sLargest=0;
//     Sort(Arr);
//     sLargest=arr[arr.length-2];
//     return sLargest;
// }
// console.log(largest(Arr));


function flatten(){
    

}