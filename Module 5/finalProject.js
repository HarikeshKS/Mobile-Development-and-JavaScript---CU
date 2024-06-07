// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
];
const tax = 1.20;

// Step 1: Implement getPrices() function with taxBoolean parameter
function getPrices(taxBoolean) {
    // Step 2: Code a for loop
    for (let dish of dishData) {
        // Step 3: Declare finalPrice variable
        let finalPrice;
        
        // Step 4: Check taxBoolean and calculate finalPrice accordingly
        if (taxBoolean === true) {
            finalPrice = dish.price * tax;
        } else if (taxBoolean === false) {
            finalPrice = dish.price;
        } else {
            // Step 6: Defensive coding - handle invalid taxBoolean
            console.log("You need to pass a boolean to the getPrices call!");
            return; // Exit function
        }
        
        // Step 7: Log dish name and finalPrice
        console.log("Dish: " + dish.name + " Price: $" + finalPrice);
    }
}

// Step 8: Implement getDiscount() function with taxBoolean and guests parameters
function getDiscount(taxBoolean, guests) {
    // Step 9: Invoke getPrices() function
    getPrices(taxBoolean);
    
    // Step 10: Defensive coding - check guests parameter
    if (typeof guests === 'number' && guests > 0 && guests < 30) {
        // Step 11: Calculate discount based on number of guests
        let discount = 0;
        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }
        console.log('Discount is: $' + discount);
    } else {
        // Step 12: Handle invalid guests parameter
        console.log('The second argument must be a number between 0 and 30');
    }
}

// Test getDiscount() function with different arguments
getDiscount(true, 2);
getDiscount(false, 10);
getDiscount(); // No arguments
getDiscount(true, 'test'); // Invalid guests argument
