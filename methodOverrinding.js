//Method overriding

//Parent Class
class Father {

    //Main Method
    addNumber() {
        let num1 = 10;
        let num2 = 20;
        console.log(num1 + num2);
    }

}

//Child Class
class Son extends Father {

    //Override Method
    addNumber() {
        let num1 = 40;
        let num2 = 70;
        console.log(num1 + num2);
    }

}

//create object instance for child class
const sonObj = new Son();
sonObj.addNumber();


