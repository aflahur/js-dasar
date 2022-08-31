class Hewan {
    constructor(name) {
        this.name = name;
    }

    komunikasi(suara) {
        console.log(`hewan ${this.name} bersuara ${suara}`);
    }

    berjalan(name) {
        console.log(`${this.name} berjalan`);
    }
}

class Kucing extends Hewan {
    constructor() {
        //keyword super digunakan untuk memanggil constructor super class atau parent classnya
        super('kucing')
    }

    berguling() {
        console.log(`${this.name} berguling`);
    }
}

const kucing = new Kucing();
kucing.berjalan();
kucing.komunikasi('cok');
kucing.berguling();