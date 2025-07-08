//Encapsulation using constructor method

function CreateCounter() {

    let count = 0;

    this.increment = () => {
        count++;
    }

    this.decrement = () => {
        count--;
    }

    this.getCount = () => {
        return count;
    }

}

//create object instance for CreateCounter method
const count = new CreateCounter();

count.increment();//1
count.increment();//2
count.increment();//3

count.decrement();//3-1 =2

const result = count.getCount();//2
console.log(result);//2