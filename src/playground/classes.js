
class Person { //Can use uppercase for class
    constructor(name = 'anon', age = 0, gender = 'non-gendered') { // (name = 'anon' means if there is no name/empty variable then it defaults to anon)
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    getGreeting() {
       // return 'Good Morning ' + this.name + '!'; //Old way
       return `Hi I am ${ this.name }!`; //New way with template string
    }
    getDescription() {
        return `${this.name} is a ${this.age} year-old ${this.gender}`;
    }
} 

class Student extends Person {
    constructor(name, age, year, major) {
        super(name, age, year);
        this.major = major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.major) {
            description += ` studying ${this.major}.`
        }
        return description;
    }
}

class Visitor extends Person {
    constructor(name, age, year, location) {
        super(name, age, year);
        this.location = location;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.location) {
            greeting += ` I come from ${this.location}.`
        }
        return greeting;
    }

}

const me = new Visitor('Alex Yoo', 23, 'female', 'Taiwan');
console.log(me.getGreeting());