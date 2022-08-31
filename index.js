//var itu bisa di redeclared,reassing,holsting

//var
//var a=10;
//redeclared
// var a=20;
//var a='angka';
// console.log(a);//akan keluar 20
//reassign
// a=30;
//a=true
// console.log(a);//akan keluar 20 dan 30
//hoisting
// b=10;
// var b;//akan ditarik keatas
// console.log(b);//20 30 10

//let
//let a=10;
// console.log(a);
//let a=20; tidak bisa di redeclared
//reasign BISA
// a=20;
// a='rofik'
// console.log(a);
//error tidak bisa di hoisting
// b=10;
// let b;
// console.log(b);

//const
//const b=20;
//console.log(b);
//const b=30;tidak bisa di redeclared
// b=30;tidak bisa di reasign
// console.log(b);tidak bisa di reasign
// c=20;
// const c;
// console.log(c);//tidak bisa di hoisting

//variable
// var a=10;
// function example() {
//     console.log(a);
// }
// console.log(a);
// example();

// function example() {
//     a=20;
//     console.log(a);
// }
// example()//20 dan a menjadi variable global
// a=30;
// a='doni';//karena sudah menjadi variabel global maka bisa diganti apapun selama di dalem fungsi bukan tipe data const
// console.log(a);

// function example() {
//     var a=20;
//     console.log(a);
// }
// example()//20 dan a menjadi variable global
// a=30;
// var a='doni';//untuk kasus ini maka var di line ini sudah berbeda dengan var di dalem fungsi example
// console.log(a);

// let a=10;
// function example() {
//     let a=20;
//     a+=10;
//     console.log(a);
// }
// example();//30
// console.log(a);//10 karena menggunakan a yang ada di atas fungsi