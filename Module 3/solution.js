// Step 1: Iterate Over an Array
function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
    for (let item of dairy) {
        console.log(item);
    }
}

logDairy();

// Step 2: Iterate Over Object Properties
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (let key in bird) {
        if (bird.hasOwnProperty(key)) {
            console.log(`${key}: ${bird[key]}`);
        }
    }
}

birdCan();

// Step 3: Iterate Over Object and Prototype Properties
function animalCan() {
    for (let key in bird) {
        if (bird.hasOwnProperty(key)) {
            console.log(`${key}: ${bird[key]}`);
        }
    }
    for (let key in bird.__proto__) {
        if (bird.__proto__.hasOwnProperty(key)) {
            console.log(`${key}: ${bird.__proto__[key]}`);
        }
    }
}

animalCan();
