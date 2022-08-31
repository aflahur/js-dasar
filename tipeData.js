//string,boolean,number(int,bigInt),null,undefined,symbol(baru ada di es6),dll
//string
let fullName='Muhammad Aflahur Rofik';
console.log(fullName);
//boolean
let benar=true;
console.log(benar);
//int
let numberInt=10;
console.log(numberInt);
console.log(typeof numberInt);
//bigInt
let numberBig=9321452321323123224151232144512313298490218390n;
console.log(numberBig);
console.log(typeof numberBig);

//null
let age=0;
let oldAge='';
let ageNew=null;
console.log(typeof age);
console.log(typeof oldAge);
console.log(ageNew);
console.log(typeof ageNew);//object
//undefined
let a;
console.log(a);
//symbol
const id=Symbol('id');
console.log(id);
const id2=Symbol('id')
console.log(id==id2);