// function pesanMinuman(pesanan, kirimPesan) {
//     console.log(`Menunggu pesanan ${pesanan} sedang diproses........`);
//     setTimeout(() => {
//         if (pesanan === 'teh') kirimPesan(`Pesanan ${pesanan} tidak ada`, null);
//         else {
//             const hasil = `Kopi ${pesanan}`;
//             kirimPesan(null, hasil);
//         }
//     }, 2000)
// }

// function minumKopi(reject, resolve) {
//     return (error, output) => {
//         if (error) {
//             reject(`Kecewa ${error}`);
//         } else {
//             resolve(`Terima kasih, sruputtt ${output}, aahhh`);
//         }
//     }
// }

// function pesanMinumanAsync(pesanan) {
//     return new Promise((resolve, reject) => {
//         pesanMinuman(pesanan, minumKopi(reject, resolve))
//     })
// }
// //async digunakan untuk memberitahu js supaya menjalankan pesanMinumAsync secara syncronus
// async function orderKopi() {
//     // await digunakan untuk menghentikan proses pembacaan kode selanjutnya
//     // sampai fungsi pesanMinumanAsync mengembalikan nilai promise(resolve)
//     const order = await pesanMinumanAsync('americano');
//     console.log(order);
// }

// orderKopi();

//dengan try catch
function minumKopi(reject, resolve) {
    return (error, output) => {
        if (error) {
            reject(`Kecewa ${error}`);
        } else {
            resolve(`enak nih ${output}`);
        }
    };

}

function pesanMinuman(pesanan, kirimPesan) {
    console.log(`Menunggu pesanan ${pesanan} sedang diproses`);
    setTimeout(() => {
        if (pesanan == 'teh') {
            kirimPesan(`pesanan ${pesanan} tidak ada`, null)
        } else {
            const hasil = `Kopi ${pesanan}`
            kirimPesan(null, hasil)
        }
    }, 2000);
}

function pesanMinumanAsync(pesanan) {
    return new Promise((resolve, reject) => {
        pesanMinuman(pesanan, minumKopi(reject, resolve))
    })
}

// async digunakan untuk memberitahu JS supaya menjalankan pesanMinumAsync secara syncronous
async function orderKopi() {
    //await digunakan untuk menghentikan proses pembacaan kode selanjutnya
    // sampai fungsi pesanMinumanAsync mengembalikan nilai promise(resolve)

    try { // resolve masuk ke try
        const order = await pesanMinumanAsync('americano')
        console.log(order);
    } catch (error) { // reject ke catch
        console.log(error);
    }
}
orderKopi()