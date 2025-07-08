// modular Pattern using ES6

let count = 0;

const increment = () => {
    count++;
    console.log(count);
}

const decrement = () => {
    count--;
    console.log(count);
}

const getCount = () => {
    return count;
}

export { increment, decrement, getCount };