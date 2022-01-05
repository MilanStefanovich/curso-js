let a = 1;

if (a >= 10) {
    console.log('a mayor k  o iwal 10')
}else{
    console.log('a es menor que 10')
}

// console.log('fin')

const hoy = new Date();

let dia = hoy.getDay();
console.log({dia})


// if (dia === 0) {
//     console.log(' es domingo')
    
// }else{
//     if (dia === 1) {
//         console.log('es lunes')
//     }
//     console.log('ni lunes ni domingo')
// }

if (dia === 0) {
    console.log('dia 0')
}else if (dia === 1) {
    console.log('dia 1')
}else if (dia === 2) {
    console.log('dia 2')
}else{
    console.log('dia 3, 4, 5, 6')
}

// Tarea
dia = 3;
const diaLetras={
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miercoles',
    4:'jueves',
    5:'viernes',
    6:'sabado',
}

console.log(diaLetras[dia]|| 'dia no existente');


