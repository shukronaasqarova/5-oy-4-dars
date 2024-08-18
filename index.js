// 1-masala

// let str = "Hello World";
// function letters(str) {
//     let lowerCase = 0;
//     let upperCase = 0;

//     for (const iterator of str) {
//         if ((iterator == iterator.toLowerCase()) && !(iterator == iterator.toUpperCase())) {
//             lowerCase++;
//         } else if (!(iterator == iterator.toLowerCase()) && (iterator == iterator.toUpperCase())) {
//             upperCase++;
//         }
//     }
//     return { lowerCase, upperCase }; 
// }

// console.log(letters(str));

// 2-masala

// let str = "arra alla ikki non salom bola"
// function palindroms(str){
//     let text = str.split(' ');
//     let res = [];
//     for (const iterator of text) {
//         let res2 = iterator.split('').reverse().join('')
//         if(iterator == res2){
//             res.push(iterator)
//         }
//     }
//     return res.join(' ,')
// } 
// console.log(palindroms(str));

// 3-masala tugamadi

// let arr = [1,2,3,1,4,5,6,2,5,4];
// function takroriySonlar(arr){
//     let res = []
//     for (const iterator of arr) {
//         if(iterator == iterator){
            
//         }
//     }
// }

// 4-masala

// let str = 'hello';
// function ikkilikTizim (str) {
//     return str.split('').map(value => {
//         let asciJadval = value.charCodeAt(0); 
//         return asciJadval.toString(2).padStart(8, '0'); 
//     }).join(' '); 
// }
// console.log(ikkilikTizim(str));

// 6-masala

// let n = 123;
// function raqamlariYigindisi(n){
//     let sum = 0;
//     let m =  n.toString().split('')    
//     for (const iterator of m) {
//         sum += iterator*1;
//     }
//     return sum;
// }
// console.log(raqamlariYigindisi(n));

// 8-masala

// let str = "salom bolalar";
// function reverseString(str){
//     let arr = str.split(' ');
//     arr = arr.map(function(v){
//         return v.split('').reverse().join('')
//     })
//     return arr.join(' ');
// }
// console.log(reverseString(str));

// 9-masala tugamadi

// let arr = [1,2,3,4,5,6,7,8,9];
// function test(arg) {
//     let res = []
//     for (const i of arg) {
//         if (i / i == 0 && i / 1 == 0) {
//             res.push(i)
//         }
//     }
//     return res
// }
// let res = test(arr);
// console.log(res);

