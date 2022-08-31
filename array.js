let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
console.log(numbers);
let anekaRagam = [
  1,
  true,
  'rofik',
  ['satu', 2, true],
  function () {
    console.log('hallo');
  },
];
anekaRagam[4]();
console.log(anekaRagam);

let animals = [];
animals[0] = 'kucing';
console.log(animals);

const animals2 = [];//tidak bisa di assign
animals2[0] = 'burung';//tidak error hanya diabaikan oleh js
console.log(animals2);

//push=menambahkan element paling akhir
animals.push('burung')
console.log(animals);
console.log(animals.length);
animals.push('burung', 'serigala', 'macan', 'singa');
console.log(animals);
console.log(animals.length);

//pop=menghapus elemenmt paling akhir
animals.pop();
console.log(animals);
console.log(animals.length);
animals.push('anak singa');
console.log(animals);
console.log(animals.length);

//shift,menhapus elemen paling awal
animals.shift();
console.log(animals);
console.log(animals.length);
animals.push('merpati');
console.log(animals);
console.log(animals.length);

//unshift menambah elemen paling awal
animals.unshift('kuda', 'jerapah');
console.log(animals);
console.log(animals.length);

//splice menghapus atau menambhkan element dengan index tertentu
animals.splice(2, 0, 'semut');
console.log(animals);
console.log(animals.length);
animalsClone = animals.slice(1, 3);//clone/copy
console.log(animalsClone);