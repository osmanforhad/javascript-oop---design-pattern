//Factory Pattern
function shapeFactory(type) {

    //return paramitarised object (closure)
    return {
        type: type,
        draw: function () {
            console.log(`Drawing ${type}`);
        }
    }

}

//create object instance (factory)
const circle = shapeFactory("Circle");
const square = shapeFactory("Square");

//method calling
circle.draw();
square.draw();