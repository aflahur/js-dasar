let strNum = '10';
let num = 10;
let strNum2 = Number(strNum);//konversi
let result = strNum2 + num;//kalo pake strNum hasilnya 1010
console.log(result);//20

//string
let number = String(10);
console.log(typeof number);//string
console.log(number);//10

let num2 = Number(false);
console.log(num2);//0
console.log(typeof num2);//number

let toBool1 = Boolean(1)
console.log(toBool1);//true

let toBool2 = Boolean(0)
console.log(toBool2);//false

let toBool3 = Boolean('');
let toBool4 = Boolean(' ');
console.log(toBool3);//false
console.log(toBool4);//true

let num3 = parseInt("10");
let num4 = parseFloat("10.2");
console.log(num3);//10
console.log(typeof num3);//number
console.log(num4);//10.2
console.log(typeof num4);//number