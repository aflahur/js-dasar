// tujuan kita membuat function:
// agar daoat mengurangi pengulangan kode program
// reusable
// program menjadi terstruktur
// function sayHello() {
//     console.log('Hello world');
// }
// sayHello();

// function sayHelloTwo(name) {
//     console.log('Halo ', name);
// }
// sayHelloTwo('Rofik')

// function add(a, b) {
//     console.log(a + b);
// }
// add(10, 10)

// function run() {
//     let a = 'lari'; //kalo cuma a akan jadi variable global
//     console.log(a);
// }
// run();

// function result(a,b) {
//     console.log(a,b);
// }
// result('a');

//function return
// function sayHello(name) {
//     return 'halo ' + name;
// }
// let result = sayHello('Rofik');
// console.log(result);

// function sayHelloTwo(name) {
//     return `hallo ${name}`;
// }
// // let resultTwo = sayHelloTwo('doni');
// // console.log(resultTwo);//yang bagus yang kaya gini
// console.log(sayHelloTwo('doni'));

// function add(a, b) {
//     return a + b;
// }
// console.log(add(10, '10'));

// function sum(a, b) {
//     return a * b;
// }
// console.log(sum(10, '10'));

// function sayName(a, b) {
//     return a + b;
//     return a;
// }
// console.log(sayName(1, 1));

// function myfunction(a, b) {
//     //return a,b,'test';
//     let res = [a, b, 'test'];
//     return res;
// }
// console.log(myfunction(4, 3));

// let temp = function mySecFunc(a, b) {
//     let res = [a, b, 'test'];
//     return res
// }
// console.log(temp(1, 1));

//membuat sebuah function menjadi argumen

// function add(x, y) {
//     return x + y;
// }

// function calculator(ang1, ang2, oprt) {
//     return oprt(ang1, ang2);
// }
// console.log(calculator(1, 2, add));

// //function default name param
// function name(name = 'rofik', alamat = 'jetis') {
//     console.log(name, alamat);
// }
// name();
// //return multi line
// function perkalian(x, y) {
//     return (
//         x, y
//     )
// }

//I I F E Immediately invoked function expression
let result = function minus(a, b) {
    return a - b;
}(3, 1);
console.log(result);

(function add(a, b) {
    console.log(a + b);
})(3, 1)