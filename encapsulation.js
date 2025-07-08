//Encapsulation using Closures

function createCounter() {
    //initial value
    let count = 0;
    return {
        //anonymous function for counter increment
        increment: function () {
            count++;
        },
        //anonymous function for counter decrement
        decrement: function () {
            count--;
        },
        //anonymous function for return counted value
        getCount: function () {
            return count;
        },
    }
}

//create object instance for couter
const counter = createCounter();

//calling anonymous function throught the object instance
counter.increment();//1
counter.increment();//2
counter.increment();//3

counter.decrement();//3-1 =2

const result = counter.getCount(); //2
console.log(result); //result 2