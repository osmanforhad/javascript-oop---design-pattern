/**
 * How to create object by
 *using  object Litaral
 */
let person = {
    first_name: "osman",
    last_name: "forhad",
    age: 32,
    city: "Dhaka",
    isBangladeshi: true,
    //we can write anonymouse function inside object
    getName: () => {
        return `My full name is: ${person.first_name} ${person.last_name}`;
    }
}

console.log(person.getName());
