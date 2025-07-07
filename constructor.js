//constructor method, constructor execute automatically when object is created, constructor can't return any result
class Person {
    //variable declaration
    num1 = 10;
    num2 = 20;
    //constructor declaration
    constructor(a, b) {
        this.num1 = a;
        this.num2 = b;
    }

    //method declaration
    addToNumber() {
        return this.num1 + this.num2;
    }
}
//create object instance
let personObj = new Person(40, 10);

//caling the method through the object instance
const result = personObj.addToNumber();
console.log(result);