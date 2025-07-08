//Inheritance

//Parent Class
class Father {
    num1 = 10;
    num2 = 20;

    addNumber() {
        const sum = this.num1 + this.num2;
        return sum;
    }

}

//Child Class
class Son extends Father {

}

//create object instance for Son class
const sonObj = new Son();

//accessing Parent class properties through Child Class object instance
console.log(sonObj.num1);
const result = sonObj.addNumber();
console.log(result);