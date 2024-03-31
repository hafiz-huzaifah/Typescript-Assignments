

// stages of life: write an if-else chain that determine a person's stage of life.
// set a value for the variable age, and then:
let age: number = 25;

// . if the person is less than 2 years old, print a messege that the person is a baby.
// . if the person is least  2 years old but less than 4, print a messege that the person is a toddler.
// . if the person is least  4 years old but less than 13, print a messege that the person is a kid.
// . if the person is least  13 years old but less than 20, print a messege that the person is a teenager.
// . if the person is least  20 years old but less than 65, print a messege that the person is an adult.
// . if the person is age  65 or older , print a messege that the person is an elder.
if(age < 2){
    console.log("person is a baby.");
}
else if(age >= 2 && age < 4){
    console.log("person is a toddler.");
}
else if(age >= 4 && age < 1){
    console.log("person is a kid.");
}
else if(age >= 13&& age < 20){
    console.log("person is a teenager");
}
else if(age >= 20 && age < 65){
    console.log("person ia an adult.");
}
else{
    console.log("person is an elder.");
}