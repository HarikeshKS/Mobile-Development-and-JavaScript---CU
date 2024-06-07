// Task 1: Code a Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
        this.xp = 0; // Initializing xp property
    }

    work() {
        console.log(`${this.name} is working as a ${this.jobTitle}.`);
    }

    gainExperience(points) {
        this.xp += points;
        console.log(`${this.name} has gained ${points} experience points. Total XP: ${this.xp}`);
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    const intern = new Worker('Bob', 21, 'Intern');
    intern.greet(); // From Person class
    intern.work();  // From Worker class
    intern.gainExperience(10); // Gain experience
    intern.age++; // Increase age
    return intern;
}

// Task 4: Code a manager object, methods
function manager() {
    const manager = new Worker('Alice', 30, 'Manager');
    manager.greet(); // From Person class
    manager.work();  // From Worker class
    manager.conductMeeting = function() {
        console.log(`${this.name} is conducting a meeting.`);
    };
    manager.conductMeeting(); // Specific to manager
    manager.gainExperience(50); // Gain experience
    manager.age++; // Increase age
    return manager;
}

// Running the functions to see the output
const internInstance = intern();
const managerInstance = manager();

// Log the intern and manager instances to verify xp property
console.log(internInstance.xp + "," + internInstance.age + "," + internInstance.name + "," + internInstance.age);
console.log(managerInstance.xp + "," + managerInstance.age + "," + managerInstance.name + "," + managerInstance.age);
