// modular Pattern
function createCounter() {

    let count = 0;

    //create a  clousers encapsulation
    return {

        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        },

        getCount: function () {
            return count;
        }

    }

}
//create object instance for createCounter method
const counter = new createCounter();

counter.increment();//1
counter.increment();//2
counter.increment();//3

counter.decrement();//3-1 = 2

const result = counter.getCount();//2
console.log(result);//2
