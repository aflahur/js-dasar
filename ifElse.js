//kondisi di javascript terdapat tiga bagian
//if
//switch
//ternary

//if statement
// nilai = 90;
// if (nilai > 80) {
//     console.log('A');
// } else if (nilai > 60) {
//     console.log('B');
// } else {
//     console.log('C');
// }

// //untuk variable grade bisa ditampung disebuah variable
// //disini kita baru pake scope dari sebuah variable
// nilai = 80;
// let grade = '';
// if (nilai < 90) {
//     grade = 'B';
// }
// console.log(grade);
// //nilai 90 a dibawah 90 b
// if (nilai == 90) {
//     console.log('A');
// } else {
//     console.log('B');
// }

//90-100(a)||80-89(B)||70-79(C)|D
// nilai = 89;
// if (nilai >= 90 && nilai <= 100) {
//     console.log('A');
// } else if (nilai >= 80 && nilai <= 89) {
//     console.log('B');
// } else if (nilai >= 70 && nilai <= 79) {
//     console.log('C');
// } else {
//     console.log('D');
// }

//kita juga bisa melakukan nested if
//kasus: 90-100(A) | 88-89(B) | 70-79(C)| selain itu D
//compentence = 2dengan nilai 90-100 berkesempatan mendapat beasiswa
nilai = 90
const compentence = 2;
if (compentence == 2 && nilai >= 90 && nilai <= 100) {
    console.log('A dan dapat beasiswa');
} else {
    if (nilai >= 90 && nilai <= 100) {
        console.log("nilai A");
    } else if (nilai >= 80 && nilai <= 89) {
        console.log('B');
    }
    else if (nilai >= 70 && nilai <= 79) {
        console.log('C');
    } else {
        console.log('D');
    }
}