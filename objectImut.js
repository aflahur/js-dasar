//imutable object
//imutable adalah tipe variable yang tidak bisa dirubah
//tipe data yang termasuk imutable adalah string,boolean,null,undefined,number.
//mutable adalah tipe data yang bisa diubah, kalau di JS tipe data object dan array merupakan mutable

const car = {
    name: "Terios",
    seats: {//untuk contoh spread operator
        count: 4,
        type: "leather",
    },
};
car.color = 'white';//push key
console.log(car);

// const newCar = car;
// newCar.name = 'BMW';
//jika kita membuat variable baru dan langsung kita assing object nya maka variabel baru tersebut hanya menyalin object itu tapi tidak dengan properti nya
// console.log(`car: ${car.name}`);
// console.log(`newCar: ${newCar.name}`);


//ada 2 cara untuk bisa salin object beserta nilai:pertama menggunakan keyword object.assign()
const newCar = Object.assign({}, car);
newCar.name = 'BMW';

console.log(`car: ${car.name}`);
console.log(`newCar: ${newCar.name}`);

//cara keduya kit abisa menggunakan spread operator,ini adakah fitur baru dari es6
const newCar2 = { ...car }
newCar2.name = 'Mercy';
console.log(`car: ${JSON.stringify(car)}`);
console.log(`newCar2: ${JSON.stringify(newCar2)}`);
//ada kekurangan ketika kita memakai spread operator,yaitu: jika kita membuat nested objext maka object yang disalin hanya satu tingkat diatasnya
//cara mengatasinya
const newCar3 = { ...car, seats: { ...car.seats } }
// newCar3.name='Avanza';//kalo nama yang di gunakan sebagai operasi,maka tidak masalah
newCar3.seats.type = 'wood';
console.log(`car: ${JSON.stringify(car)}`);
console.log(`newCar3: ${JSON.stringify(newCar3)}`);