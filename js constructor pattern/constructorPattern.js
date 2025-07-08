//Constructor Design Pattern
function user(name, role) {
    //constructor property
    this.name = name;
    this.roll = roll;
    //anonymouse function using conetructor property
    this.describe = function () {
        console.log(`${this.name} is a ${this.role}`);
    }
}

//create obejct instance for method
const user1 = new user("jhon", "admin");
const user2 = new user("jack", "manager");

//calling method through the object instance
user1.describe();
user2.describe();