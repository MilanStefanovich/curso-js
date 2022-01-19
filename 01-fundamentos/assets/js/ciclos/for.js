const names = ['name1','name2','name3','name4','name5'];

console.warn('for tradicional')

for(let i = 0; i < names.length; i++){
    console.log(names[i])
}

console.warn('for in')

for(let i in names){
    console.log(names[i])
}

console.warn('for of')

for( let name of names){
    console.log(name)
}