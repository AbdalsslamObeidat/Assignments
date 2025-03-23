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

let arr = [1, 5, 9, 6, 3, 87, 72, 23];

function find(array, target) {
   array.sort((a,b)=>a-b);

   let left=0;
   let right=array.length-1;
   while(left<right){
    let sum=array[left]+array[right];
    if(sum===target){
        return [array[left],array[right]];
    }
    else if(sum<target){
        left++;
    }
    else if(sum >target){
        right--;
    }
   
   }
   return null;
   
}

console.log(find(arr, 9)); 
