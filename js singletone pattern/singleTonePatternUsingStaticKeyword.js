//single tone design pattern using static keyword
class DatabaseConnection {

    //without creating any object we can directly use any property through the static keyword
    static instance;

    //create static method
    static getInstance() {

        //check class instance is in or not
        if (!DatabaseConnection.instance) {
            //create class instance
            DatabaseConnection.instance = new DatabaseConnection();

            DatabaseConnection.instance.message = "i am only on database connection!";
        }
        return DatabaseConnection.instance;

    }

}

//access class property without any object just calling the class name
const db1 = DatabaseConnection.instance();
const db2 = DatabaseConnection.instance();

console.log(db1 == db2);//true