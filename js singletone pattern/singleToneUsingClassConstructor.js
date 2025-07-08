//Single Tone Design Pattern using class constructor
class DatabaseConnection {

    constructor() {

        if (!DatabaseConnection.instance) {
            this.message = "I am the only database connection!";
            DatabaseConnection.instance = this;
        }
        return DatabaseConnection.instance;
    }

}

//create object instance
const obj1 = new DatabaseConnection();
const obj2 = new DatabaseConnection();

console.log(obj1 == obj2);//true