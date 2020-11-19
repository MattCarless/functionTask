
/**
 * Customer details
 */
const customerApiResponse = {
    customer1: {
        customer: 1,
        name: "Craigo",
        birthYear: 1982,
        sex: "m"
    },
    customer2: {
        customer: 2,
        name: "Ellie",
        birthYear: 1987,
        sex: "f"
    },
    customer3: {
        customer: 3,
        name: "Matty",
        birthYear: 1991,
        sex: "m"
    },
    customer4: {
        customer: 4,
        name: "Soph",
        birthYear: 1991,
        sex: "f"
    },
    customer5: {
        customer: 5,
        name: "Baby C",
        birthYear: 2016,
        sex: "f"
    }
};
/**
 * Product details
 */
const productsApiResponse = {
    product1: {
        productId: 1,
        product: "booze",
        minAge: 18,
        maxAge: null
    },
    product2: {
        productId: 2,
        product: "cardigan",
        minAge: 56,
        maxAge: null
    },
    product3: {
        productId: 3,
        product: "winklepickers",
        minAge: 12,
        maxAge: 37
    }
};
/**
 * Orders recieved
 */
const ordersApiResponse = [
    {
        customer: "customer1",
        productId: product1
    },
    {
        customer: "customer1",
        productId: product2
    },
    {
        customer: "customer3",
        productId: product3
    },
    {
        customer: "customer2",
        productId: product1
    },
    {
        customer: "customer5",
        productId: product1
    },
];

/**
 * Take the customer's birth year and the current year and return the customer's age (number)
 * @birthYear = number
 * @now = number
 */
function getAge(birthYear, now) {
    return now - birthYear;
}

/**
 * Take an age and a product and return a boolean
 * @age = number
 * @product = individual product
 */
function allowedToPurchace(age, product) {
    if (age > product.minAge && age < product.maxAge) {
        return true;
    } else {
        return false;
    }
}

/**
 * Successful order
 * @customer = customer name string
 * @product = product name string
 */
function successfulPurchace(customer, product) {
    console.log(`${customer}, your order of ${product} has been processed and is on it's way!`);
}
/**
 * unsuccessful order
 * @customer = customer name string
 * @product = product name string
 */
function unSuccessfulPurchace(customer, product) {
    console.log(`I'm sorry ${customer}, your order of ${product} was not successful!`);
}

/**
 * ------- TODO ----------
 * 
 * Loop over the orders response, and for each product display to the user 
 * whether their order has been succesful or not.
 * All of the functions that you need for this challenge have been provided,
 * you just need to use them correctly in your loop to fulfill the task
 */