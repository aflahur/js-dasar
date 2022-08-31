// console.log('hello1');
// setTimeout(() => {
//     console.log('hello 2');
// }, 1000)
// console.log('hello3');

// function Async(cetak) {
//     setTimeout(() => {
//         cetak();
//     }, 200);
// }
// function cetak() {
//     console.log('rofik');
// }

// console.log('mulai');
// Async(cetak);
// console.log('selesai');

//ini adalah penggunaan async yang salah
//karena let users di deklarasi duluan
//di line 24 terjadi blocking
//line 35 di eksekusi
// function userCredentialRepo() {
//     let users = [];
//     setTimeout(() => {
//         users = [{
//             username: 'rofik',
//             passwod: '1234'
//         }, {
//             username: 'fadli',
//             passwod: 4321
//         }]
//     }, 1000);
//     return users;
// }

// //hanyua dapat array kosong dari repo
// function findUser(userName) {
//     const userRepo = userCredentialRepo();
//     console.log(userRepo);
//     return userRepo.find((u) => u.userName === userName);
// }
// findUser('rofik')

// ==================================================== // ini yang benar
function userCredentialRepo(findUser) {
    setTimeout(() => {
        let users = [{
            userName : 'jution',
            password : 1234,
        },{
            userName : 'fadli',
            password : 4321,
        }]
        findUser(users);
    }, 1000);
}

function findUser(userName) {
   let findUserCr = (users) => {
        let result = users.find((u) => u.userName === userName);
        console.log(result);
   }
   userCredentialRepo(findUserCr);
}

findUser('jution');