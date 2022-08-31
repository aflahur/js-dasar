// function p1() {
//     console.log('enigmacamp 1');
// }

// function p2(callback) {
//     setTimeout(
//         function () {
//             console.log('enigmacamp 2');
//             callback();
//         }, 1000
//     );
// }

// function p3() {
//     console.log('enigmacamp 3');
// }

// p1();
// p2(p3);

function minumKopi(error, output) {
    if (error) {
        console.log(`Kecewa ${error}`);
    } else {
        console.log(`enak nih ${output}`);
    }
}

function pesanMinum(kirimPesan, pesanan) {
    console.log(`Menunggu pesanan ${pesanan} sedang diproses`);
    setTimeout(() => {
        if (pesanan == 'teh') {
            kirimPesan(`pesanan ${pesanan} tidak ada`)
        } else {
            setTimeout(() => {
                console.log('pesanan sedang dibuat');
            }, 2000);
            setTimeout(() => {
                const hasil = `Kopi ${pesanan}`
                kirimPesan(null, hasil)
            }, 3000);
        }
    }, 2000);
}
pesanMinum(minumKopi, 'latte')