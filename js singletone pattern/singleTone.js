//Single Tone Design Pattern

//create db connect object instance
const CreateDatabaseConnection = {
    connect: null,
    //annonymous fucntion
    createConnect: function () {
        if (!this.connect) {
            //Database Connection Code
            this.connect = { message: "I am only on connection" }
        }
        return this.connect;
    }
}

//create object instance and calling objets properties
const obj1 = CreateDatabaseConnection.connect();
const obj2 = CreateDatabaseConnection.connect();

console.log(obj1 == obj2);//true
