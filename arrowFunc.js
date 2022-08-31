//arrow function -> perilakunya mirip seperti function pada umumnya hanya penulisannya saja yang beda
//arrow function ditandi dengan =>
//di arrow function kita sudah tidak lagi memerlukan keywoard function

const sayHello = () => {
    console.log('Hello');
}
sayHello();
// let hello = sayHello();
// console.log(hello);arrow function bisa dimasukan ke variable
const sayHello2 = (name) => {
    console.log(`hello ${name}`);
}
sayHello2('rofik');

const sayHello3 = (name) => {
    return `selamat pagi ${name}`
}
console.log(sayHello3('rofik'));

//bisa ditulis seperti ini bila hanya satu param
//tidak menuliskan return karena hanya 1 param
const sayHello4 = name => console.log(`Selamat makan ${name}`);
sayHello4('rofik');