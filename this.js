// // console.log(module.exports)
// console.log(this==module.exports)
// let num1=3;
// let num2=2;
// console.log(this.num1+this.num2)
// // function sum(){
// //     // return this.num1+this.num2
// //     return num1+num2
// // }
// // console.log(sum())



// module.exports.num1=3;
// module.exports.num2=2;
// // console.log(this.num1+this.num2);


// module.exports.sum=function(){
//     // console.log(this)
//     return this.num1+this.num2
// }
// console.log(module.exports.sum())

// 'use strict';
// function sum(){
//     console.log(this)
// }
// sum()

// 'use strict';
// let sum=()=>{
//     console.log(this)
// }
// sum()


// function task(massege){
//     for(i=1000000000;i>0;i--){

//     }
//      console.log(massege);
// }
// console.log("start task")
// task("task completed")
// console.log("task end")

// callback queu
function task(massege){
    setTimeout(()=>{
     console.log(massege);
    })
}
console.log("start task")
task("task completed")
console.log("task end")