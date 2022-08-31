const product = {
    productId: 123,
    name: 'sabun',
    info: function () {
        console.log(`productId ${this.productId}, productName ${this.name}`);
    },
}
product.info();

// JS memakai sebuah function untuk membuat object
// MARKICOB !!!!!
// function Product(id, name) {
//     let product = {};
//     product.productId = id;
//     product.name = name;
//     return product
// }
// let product01 = Product();
// let product02 = Product();
// console.log(product01);
// console.log(product02);
// di sini kita sudah melihat bahwa sebuah function bisa membuat object

function Product(id, name) {
    let product = {};
    product.productId = id;
    product.name = name;
    product.info = function () {
        return `productId ${this.productId}, productName ${this.name}`;
    }
    return product;
}
let product01 = Product(123, 'sabun');
let product02 = Product(321, 'shampo');
// di sini bisa kita lihat function di create ulang setiap membuat sebuah object baru
console.log(product01);
console.log(product02);

// ========================================================= //
// Bagaimana caranya agar info ini tidak ikut saat dipanggil ??
// kita coba membuat sebuah method terpisah untuk menampung info
const ProductMethod = {
    info: function () {
        return `productId ${this.productId}, productName ${this.name}`;
    }
}
function ProductObject(id, name) {
    // copy
    // let product membuat object abru dari product dari product method
    let product = Object.create(ProductMethod);
    product.productId = id;
    product.name = name;
    return product;
}
let product03 = ProductObject(234, 'Jution');
console.log(product03);
console.log(product03.info());
let product04 = product03;
product04.productId = 1234;
console.log(product03.info());
console.log(product04);
// Code di atas kurang bagus karena kita harus membuat sebuah object lain untuk membuat obect yang reusable
// maka dari itu, JS punya fitur yang namanya prototype
// semua fungsi di JS itu sudah memiliki prototype
// function kosong() {

// }
// console.log(kosong.prototype);
function ProductPrototype(id, name) {
    let product = Object.create(ProductPrototype.prototype);
    product.productId = id;
    product.name = name;
    return product;
}
ProductPrototype.prototype.info = function () {
    return `productId ${this.productId}, productName ${this.name}`;
}
let product05 = ProductPrototype(233, 'sikat gigi');
console.log(product05.info());

//constructor di function
//dengan parameter
function NewProduct(id, name) {
    this.productId = id;
    this.productName = name;
}

NewProduct.prototype.info = function () {
    return `productId ${this.productId} productName ${this.productName}`
}

let product06 = new NewProduct(999, 'parfum');
console.log(product06.info());
//tanpa parameter,tetapi menggunakan method
function Car() {
    this.brand = '';
    this.name = '';
    this.run = function () {
        console.log('car is running');
    }
}
const corolla = new Car();
const terrios = new Car();
console.log(corolla);
console.log(terrios);
corolla.run();
//dengan parameter dan method
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
        console.log(`Hello ${name}, my name is ${this.firstName}`);
    }
}

const rofik = new Person("Aflahur", "Rofik")
rofik.sayHello("Joko")
function MotBike(brand, name) {
    this.brand = brand;
    this.name = name;
    this.gas = function () {
        console.log(`${this.brand} ${this.name} engine started`);
    }
}
const honda = new MotBike('Honda', 'Vario');
const yamaha = new MotBike('Yamaha', 'Mio');
console.log(honda);
console.log(yamaha);
honda.gas();
yamaha.gas();