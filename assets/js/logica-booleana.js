const regresaTrue = () => {
    console.log('regresa true')
    return true;
}

const regresaFalse= () => {
    console.log('regresa false')
    return false;
}


console.warn('not o la negacion');
console.log(true);
console.log(!true);
console.log(!regresaFalse());


console.warn('and')
console.log(true && true);
console.log(true && false);


console.warn('============')
console.log(regresaTrue() && regresaFalse());
console.log(regresaFalse() && regresaTrue());



