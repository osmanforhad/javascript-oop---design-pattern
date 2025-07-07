/**
 * How to create object by
 *using  object instance
 */
let person = new Object();
//create object by using Object instance
person.first_name = "osman";
person.last_name = "forhad";
person.age = 32,
    person.city = "Dhaka";
person.isBangladeshi = true;
//we can write anonymouse function by using object instance
person.getName = () => {
    return `My name is : ${person.first_name} ${person.last_name}`;
}
console.log(person.isBangladeshi);
//console.log(person.age);
//console.log(person.getName());
//console.log(person);