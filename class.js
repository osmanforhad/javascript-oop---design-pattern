//creating class | variable declaration | fucntion declaration | object declaration from class | uses of class property
class Person {

    //variable declaration
    first_name = "osman";
    last_name = "forhad";
    age = 32;
    isBangladeshi = true;
    city = "Dhaka";

    //fucntion declaration
    getName() {
        //accessing variable through this key word
        return `My name is : ${this.first_name} ${this.last_name}`;
    }

}

//object declaration from class
let PersonObj = new Person();

console.log(PersonObj.last_name);
//console.log(PersonObj.getName());
//console.log(PersonObj);