//Encapsulation using ES6 Class
class createCounter {

    #count = 0;

    increment() {
        this.#count++;
    }

    decrement() {
        this.#count--;
    }

    getCount() {
        return this.#count;
    }

}

//create object instance for createCounter Class
const counter = new createCounter();
//calling method through the object instance
counter.increment();//1
counter.increment();//2
counter.increment();//3

counter.decrement();//3-1 =2

const result = counter.getCount();//2
console.log(result);//2