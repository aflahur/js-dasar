class Car {
    constructor(brand, name) {
        this.brand = brand;
        this.name = name;
    }

    engineStart() {
        console.log(`${this.brand}${this.name} engine started`);
    }
}
const corolla = new Car('Toyota', 'Corolla');
console.log(corolla);
corolla.engineStart();
const terios = new Car('Daihatsu', 'Terios');
console.log(terios);
terios.engineStart();