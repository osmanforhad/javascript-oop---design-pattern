/**
 * Constructor Inheritance
 */

//Parent Class
class Father {

    constructor() {
        console.log("i am aconstructor from Father class");
    }

}

//Child Class
class Son extends Father {

    constructor() {
        super();//if we try to make constructor inside child class then we need to declare super keyword
        console.log("i am constructor from child class");
    }
}

const sobObj = new Son();
console.log(sobObj);

