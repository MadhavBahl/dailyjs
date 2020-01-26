/**
 * Classes in JS
 * Syntax
 */

class MySuperClass {
    constructor ({ parentData }) {
        this.parentData = parentData;
    }

    parentFunction () {
        console.log ("This is from super class!");
    }
}

class MySubClass {
    constructor ({ childData }) {
        this.childData = childData;
    }

    childFunction () {
        console.log ("This is from child class");
    }
}

const subInstant = new MySubClass ({ parentData: "Super", childData: "Sub" });
subInstant.childData ();
subInstant.parentData ();