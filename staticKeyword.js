//static keyword
class Person {
    static first_name = "osman";
    static last_name = "forhad";

    static getName() {
        return `my name is : ${this.first_name} ${this.last_name}`;
    }
}

//by using static keyword we can directly access those(static) property without creating class object or instance
const result = Person.getName();
console.log(result);
