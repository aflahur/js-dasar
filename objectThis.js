//this adalah referensi ke object milik siapa
const myObjt = {
    x: 50,
    fun: function () {
        console.log(this.x);
    }
}
myObjt.fun();
//console.log(myIbjt.fun());
//implisit binding -> tidka ditentukan oleh developer tp ditentukan oleh js tergantund dari fungsi itu dipanggil
//exolisit binding -> nilai yang sudah ditentukan oleh developer
//ada 3 cara untuk explicit bindingL call(),apply(),bind()

const anotherObj = {
    x: 100
}
function foo(name, address) {
    console.log(name, address, this.x);
}
foo('doni', 'ragunan');

//call,oarameter tambahan berupa variadic
foo.call(anotherObj, 'rofik', 'jetis');

//apply,parameternya tambahan berupa array
foo.apply(anotherObj, ['rofik', 'jetis']);

//bind,paling sering digunakan
const data = foo.bind(anotherObj, 'rofik', 'jetis');
data();