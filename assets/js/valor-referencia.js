let a =10;
let b = a;
console.log({a,b})

let juan = {
    nombre: 'juan'
};

let ana = {...juan};
ana.nombre='ana'
console.log({juan, ana})

const cambiaName =(persona) => {
    persona.nombre= 'tony';
    return persona;
}

let peter = {nombre:'peter'};
let tony = cambiaName (peter);

console.log(peter, tony);

// arreglos
const frutas = ['fruta 1', 'fruta 2','fruta 3']

console.time('slice');
const otraFruta = frutas.slice();
console.time('slice');

console.time('spread');
const otraFruta2 = [...frutas];
console.time('spread');

otraFruta.push('fruta 5');


console.table({frutas, otraFruta})