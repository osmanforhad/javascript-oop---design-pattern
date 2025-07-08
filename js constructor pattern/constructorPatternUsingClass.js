// constructor pattern using ES6 class
class User {

    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    describe() {
        console.log(`${this.name} is a ${this.role}`);
    }

}


//create obejct instance for class
const user1 = new User("osman", "admin");
const user2 = new User("forhad", "manager");

//calling method through the object instance
user1.describe();
user2.describe();