//imutable array
//kasusnya jika kita assign sebuah variable dengan array yang sudah dibuat dan mengubah array baru ,maka array yang asli ikut berubah
//ada 2 cara mengatasi masalahnya

//cara pertama menggunakan array.form()
let numbers = [1, 2, 3];
let nums = Array.from(numbers);
nums[0] = 5;
console.log('numbers ', numbers);
console.log('nums ', nums);

//cara kedua menggunakan spread operator seperti di imutable object
let numbers2 = [4, 5, 6];
let nums2 = [...numbers2];
nums2[0] = 7;
console.log('numbers2 ' + numbers2);
console.log('nums2 ' + nums2);

//array pada js memiliki built in methods yang dibagi menjadi 2:
//pure function=tidak merubah array yang sudah ada
//inpure function=merubah
//array.length,array.indexof(tidak merubah data)
let arr = [1, 23, 234, 34];
let fe = arr.forEach((e) => {
    return e * 2;//undefined karena tidak retrun apa apa
})

let ma = arr.map((e) => {
    return e * 2;
})

let fi = arr.filter((e) => {
    return e != arr[e];
})
//find,findIndex
console.log(arr);
console.log(fe);
console.log(ma);
console.log(fi);

//destructruing array
let arr2 = [2,3,4,5,6]
let [a,b,...c] = arr2
console.log(a,b,c);
console.log(a,b,...c);