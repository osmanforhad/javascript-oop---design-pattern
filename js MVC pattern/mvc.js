//Model
class Model {

    constructor(email, mobile) {
        this.email = email;
        this.mobile = mobile;
    }

    getData() {
        return {
            email: this.email,
            mobile: this.mobile,
        }
    }
}


//View
class View {

    render(data) {
        console.log(`Rendaring Data: Email Address is: ${data.email} and Mobile No is: ${data.mobile}`);
    }

}

//Controller
class Controller {

    constructor(model, view) {

        this.model = model,
            this.view = view;
    }

    updateView() {
        this.view.render(this.model.getData());
    }

}

//create object instance for Model class
const myModel = new Model("osman@gmail.com", "01672880108");

//create object instance for View class
const myView = new View();

//create object instance for Controller class
const myController = new Controller(myModel, myView);

//calling method through the controller object instance 
myController.updateView();

