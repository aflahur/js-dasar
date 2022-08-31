// 3 kondisi promise
// pending (janji sedang dallam proses)
// fulfilled (janji ditepati)
// rejected (janji gagal terpenuhi)

let userName = 'doni';
let password = '1234';
const janji = new Promise((resolve, reject) => {
    let id = 1234;
    setTimeout(() => {
        if (userName === 'doni' && password === '12234') {
            resolve(id);
        } else {
            reject('invalid username or password');
        }
    }, 3000);
});
// console.log(janji);
//resolve pending ->fulfield
function handleResolve(resolveValue) {
    console.log(resolveValue);
    console.log(janji);
}
//reject pending->rejected
function handleReject(rejectValue) {
    console.log(rejectValue);
    console.log(janji);
}

janji.then(handleReject)
    .catch(handleReject)
    .finally(() => console.log('finally'))

//cara lain
// janji.then(handleResolve, handleReject);
//cara lain
// janji.then(handleResolve);
// janji.catch(handleReject);//catch hanya menerima onjerected
// janji.finally(() => console.log('finally'));