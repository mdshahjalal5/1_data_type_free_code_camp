// Declare a variable called person with a specific object type annotation
let person: {
  name: string;
  location: string;
  isProgrammer: boolean;
};

// Assign person to an object with all the necessary properties and value types
person = {
  name: 'Danny',
  location: 'UK',
  isProgrammer: true,
};

person.isProgrammer = 'Yes'; // ERROR: should be a boolean


person = {
  name: 'John',
  location: 'US',
}; 
// ERROR: missing the isProgrammer property


let intro :{
    name2:string, 
    age:number,
    is_married:boolean
}

intro = {
    name2:'sah', 
    age:3, 
    is_married:true
}
// !n! tif => type interface typeof
// intro.name2 = 3 //!n! [ts] Type 'number' is not assignable to type 'string'
//  !n! important 
const identity: typeof intro = {
    name2:'sah', 
    age:3, 
    is_married:true
}


