//cara lebih singkat kita bisa menggunakan ternary operator
//condition ? expIfTrue:expIfFalse
//lebih baik digunakan hanya untuk dua buah kondisi saja yang di rekomendasikan
number = 10;
let result = number % 2 === 0 ? `${number} merupakan bilangan genap` : `${number} merupakan bilangan ganjil`;
console.log(result);

//ternary lebih dari 2 pilihan
number = 'sepuluh';
result = number % 2 == 0 ? `${number} merupalan bilangan ganjil` : number % 2 == 1 ? `${number} merupakan bilangan ganjil` : `${number} bukan merupakan bilangan`
console.log(result);

//truthy dan falsy
// falsy:
//kalo number nilainya 0;
//kalo string nilainya string kosong ""/''
//null
//undefined
//NaN atau isNaN
let firstName = 'Rofik';
if (firstName) {
    console.log(`hallo ${firstName}`);
} else {
    console.log('nama masih kosong');
}
console.log('' == false);// kalo di '' ada isinya maka akan jady truthy