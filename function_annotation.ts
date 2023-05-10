// !n! itnos => interface, type, annotation signature same thing(perhaps)

let Iterface:{
    name:string
    // !n! before es6
    addition(p:number):number,
    concate:(x:string, y:number) => string;
}

const Interface:typeof Iterface = {
    name:"learning",
    addition(p){
        return 2*p+1;
    }, 
    concate:(a, b) =>{
        return a+b;
    }
}

const add = Interface.addition(3)
console.log(add, '"add"');
const concate = Interface.concate('I am ', 10)
console.log(concate, '"concate"');

type method= typeof Iterface;
const Method:method = Interface;

