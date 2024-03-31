
// wite a program that create objects containing these items.



interface person{
    age : number,
    name : string,
    nationality : string,
   student : Boolean
}
//person object.
let person : person = {
age : 16 ,
name : 'Haya' ,
nationality :'Pakistan',
student: true
}
//print person
console.log(person);


//datatype of car object
interface car {
    maker : string,
    color : string,
    automatic : Boolean
}
//car object
let car = {
    maker :'Toyota',
    color : 'Black',
    automatic : true
}
//print car
console.log(car);