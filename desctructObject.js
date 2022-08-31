//dengan desctructuring object, kita lebih mudah dalam mengolah property object untuk mendapatkan valuenya
//selain syntaxnya ringkas,kita dapat menghindari typo

// const book = {
//     title: 'Bojo loro',
//    author: 'tonggo dewe',
//     hal: 100
// }

// //distructuring object
// const { title, author, hal } = book;
// console.log(title, author, hal);

const book = {
    title: 'Bojo loro',
    author: 'tonggo dewe',
    hal: 100,
    publisher: {
        fullName: 'Percetakan gang sebelah',
        address: 'jetis'
    }
}

//destructuring
const { title, author, hal, publisher: { fullName, address } } = book;
console.log(title, author, hal, fullName, address);