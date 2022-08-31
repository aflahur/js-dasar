// function minumKopi(error, output) {
//     if (error) {
//         console.log(`Kecewa ${error}`);
//     } else {
//         console.log(`enak nih ${output}`);
//     }
// }

// function pesanMinum(pesanan, kirimPesan,) {
//     console.log(`Menunggu pesanan ${pesanan} sedang diproses`);
//     setTimeout(() => {
//         if (pesanan == 'teh') {
//             console.log('masuk');
//             kirimPesan(`pesanan ${pesanan} tidak ada`, null)
//         } else {
//             setTimeout(() => {
//                 console.log('pesanan sedang dibuat');
//                 const hasil = `Kopi ${pesanan}`
//                 kirimPesan(null, hasil)
//             }, 3000);
//         }
//     }, 2000);
// }

// let pesan = ['latte', 'teh', 'americano', 'capucino'];
// pesanMinum(pesan[0], (error, pesanan) => {
//     console.log(pesanan);
//     pesanMinum(pesan[1], (error, pesanan) => {
//         console.log(pesanan);
//         pesanMinum(pesan[2], (error, pesanan) => {
//             console.log(pesanan);
//             pesanMinum(pesan[3], (error, pesanan) => {
//                 console.log(pesanan);
//             })
//         })
//     })
// })


function minumKopi(error, output) {
    if (error) {
        console.log(`Kecewa ${error}`);
    } else {
        console.log(`Terima kasih, sruputtt ${output}, aahhh`);
    }
}

function pesanMinum(pesanan, kirimPesan) {
    console.log(`Menunggu pesanan ${pesanan} sedang diproses........`);
    setTimeout(() => {
        if (pesanan === 'teh') {
            kirimPesan(`Pesanan ${pesanan} tidak ada`, null);
        } else {
            setTimeout(() => {
                console.log(`Mohon ditunggu yaa, pesanan sedang dibuat....`);
                const hasil = `Kopi ${pesanan}`;
                kirimPesan(null, hasil);
            }, 3000);
        }
    }, 2000)
}

function buatMinum(pesanan) {
    console.log(`Mohon ditunggu yaa, Kopi ${pesanan} sedang dibuat ...`);
}

let pesan = ['latte', 'teh', 'americano', 'cappucino'];
pesanMinum(pesan[0], (error, pesanan) => {
    minumKopi(error, pesanan)
    pesanMinum(pesan[1], (error, pesanan) => {
        minumKopi(error, pesanan)
        pesanMinum(pesan[2], (error, pesanan) => {
            minumKopi(error, pesanan)
        })
    })
})