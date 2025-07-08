//Factory Pattern
function shapeFactory(type) {

    if (type === 'circle') {
        return { type: type, des: "This is circle", color: 'red' }
    }

    else if (type === 'square') {
        return { type: type, des: "This is square", side: "4 sides" }
    }

}

//create object instance (factory)
const circle = shapeFactory("circle");
const square = shapeFactory("square");

console.log(circle);
console.log(square);