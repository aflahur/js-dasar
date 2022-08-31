// const stock = {
//     coffeBean: 100,
//     water: 10000
// }

// function pesanKopi(pesanan) {
//     console.log(`Memesan ${pesanan}`);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (pesanan === 'teh') reject(`pesanan ${pesanan} tidak tersedia`)
//             else {
//                 const hasil = `kopi ${pesanan} sedang diproses`
//                 resolve(hasil);
//             }
//         }, 1500);
//     })
// }

// function cekStock() {
//     console.log('sedang cek stock...');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (stock.coffeBean > 0 && stock.water > 0) {
//                 resolve('stock kopi tersedia')
//             } else {
//                 reject('stock kopi tidak tersedia')
//             }
//         }, 1500);
//     })
// }

// function seduhKopi(pesanan) {
//     console.log(`sedang membuat kopi ${pesanan}`);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`kopi ${pesanan} telah siap`)
//         }, 3000)
//     })
// }

// function pesanMinuman(pesanan) {
//     pesanKopi(pesanan)
//         .then(result => {
//             console.log(result);
//             return cekStock();
//         })
//         .then(result => {
//             console.log(result);
//             return seduhKopi(pesanan);
//         })
//         .then(result => {
//             console.log(result);
//         })
//         .catch(error => console.error(error));
// }

// pesanMinuman('latte');

//promise all
const stock = {
    coffeBean: 100,
    water: 10000
}

function pesanKopi(pesanan) {
    console.log(`Memesan ${pesanan}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (pesanan === 'teh') reject(`pesanan ${pesanan} tidak tersedia`)
            else {
                const hasil = `kopi ${pesanan} sedang diproses`
                resolve(hasil);
            }
        }, 1500);
    })
}

function cekStock() {
    console.log('sedang cek stock...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stock.coffeBean > 0 && stock.water > 0) {
                resolve('stock kopi tersedia')
            } else {
                reject('stock kopi tidak tersedia')
            }
        }, 1500);
    })
}

function seduhKopi(pesanan) {
    console.log(`sedang membuat kopi ${pesanan}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`kopi ${pesanan} telah siap`)
        }, 3000)
    })
}

function pesanMinuman(pesanan) {
    pesanKopi(pesanan)
        .then(result => {
            console.log(result);
            return cekStock();
        })
        .then(result => {
            console.log(result);
            return Promise.all([memanaskanAir(), menggilingBijiKopi()])
        })
        .then(result => {
            console.log(result);
            return seduhKopi(pesanan);
        })
        .then(result => {
            console.log(result);
        })
        .catch(error => console.error(error));
}

//promise all
function memanaskanAir(params) {
    console.log('memanaskan air');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('air sudah panas')
        }, 200);
    })
}

function menggilingBijiKopi() {
    console.log('Mengiigling biji kopi');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('biji kopi sudah siap')
        }, 2000);
    })
}

pesanMinuman('latte');