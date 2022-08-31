// const user = {
//     //key-value
//     firstName: 'rofik',
//     lastName: 'aflahur',
//     age: 23,
//     isActive: true
// }
// //mengakses properti object
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.age);
// console.log(user.isActive);
// //cara lain
// console.log(user['firstName']);
// console.log(user['lastName']);
// console.log(user['age']);
// console.log(user['isActive']);
// //manipulasi
// let newName = user.firstName = 'aflahur';
// console.log(newName);
// console.log(user);
// //cara lain
// let newName2 = user['lastName'] = 'rofik';
// console.log(newName2);
// console.log(user);
// //menambahkan key baru
// user.email = 'aflahurrofik@gmail.com'
// console.log(user);

// for (const key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

// const user = {
//     firstName: 'aflahur',
//     lastName: 'rofik',
//     age: 23,
//     isActive: true,
//     sayHello: function (name) {
//         console.log(`Hello ${name}`);
//     },
//     sayHello2: (name) => {
//         console.log(`Hello ${name}`);
//     }
// }

// user.email = 'aflahurrofik@gmail.com';
// console.log(user);

// for (const key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

//user.sayHello(user.firstName);
// delete user.isActive;
// console.log(user);

//nested object
const user = {
    firstName: 'aflahur',
    lastName: 'rofik',
    age: 23,
    isActive: true,
    address: {
        fullName: 'Jetis Purwodadi',
        number: 36,
    },
    sayHello: function (name) {
        console.log(`Hello ${name}`);
    },
    sayHello2: (name) => {
        console.log(`Hello ${name}`);
    }
}

let nested = user.address;
console.log(nested);