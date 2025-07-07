//Getetr and Setter Method
class Person {

    //Getter and Stter Method
    set SetPrice(value) {
        this.price = value;
    }
    get GetPrice() {
        return this.price;
    }

}
//create object instance
let personObj = new Person();

//calling and working with setter method
personObj.SetPrice = 300;

//calling and working with getetr method
const getPrice = personObj.GetPrice;
console.log(getPrice);