// for (let i = 0; i < 5; i++) {
//     console.log('saya seorang developer');
// }
// let number = 5
// for (let a = 0; a < number; a++) {
//     console.log('ngeleh gan');
// }

//break dan continue
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1) {
        continue;
    }
    if (i > 8) {
        break
    }
    console.log(i);
}

const animals = ['burung', 'gajah', 'rusa']
for (let i = 0; i < animals.length - 1; i++) {
    console.log(animals[i]);
}

for (const i in animals) {
    console.log(animals[i]);//index nya
}

for (const i of animals) {
    console.log(i);//value nya
}

//nested loop
for (let i = 0; i < 2; i++) {
    console.log('ini loop luar, looping ke -', i)
    for (let j = 0; j < 2; j++) {
        console.log('ini loop dalam, looping ke -', j)
    }
    console.log('ini loop luar, looping ke -', i)
}