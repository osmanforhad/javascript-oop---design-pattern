/**
 * How to create object by
 *using  object constructor
 */
function person() {
    //assign peoperty in object
    this.first_name = "osman";
    this.last_name = "forhad";
    this.age = 32;
    this.city = "Dhaka";
    this.isBangladeshi = true;
    //we can write anonymouse function by using object constructor
    this.getName = () => {
        return `My name is : ${this.first_name} ${this.last_name}`;
    }
};

//creating object instance
let PersonInstance = new person();

//calling object function by using obejct instance
console.log(PersonInstance.age);
//console.log(PersonInstance.getName());
//console.log(PersonInstance);