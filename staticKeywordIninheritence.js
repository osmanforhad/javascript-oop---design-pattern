/**
 * static keyword in Inheritance
 */

//Parent Class
class Father {

    static greetParent() {
        return "Hello this is from Father Class";
    }

}

//Child Class
class Son extends Father {

    greetChild() {
        return "Hello this is from Child Class";
    }


}

//by using static keyword we can directly access those(static) property without creating class object or instance
const simplaeProcidure = Father.greetParent();
console.log(simplaeProcidure);

const inheritanceProcidure = Son.greetParent();
console.log(inheritanceProcidure);


