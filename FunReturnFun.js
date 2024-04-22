/* 
Returning function from from function- we can return a function from another 
function */

function compareBy(propertyName) {
    return function(a, b) {
        let x = a[propertyName],
            y = b[propertyName];

        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1;
        } else {
            return 0;
        }
    };
}

let products = [
    {name: 'Iphone', Price: 90},
    {name: 'Samsung Galaxy', Price: 850},
    {name: 'Sony Xperia', Price: 700}
];

// Sorting the product by name
console.log('Product sorted by name:');
products.sort(compareBy('name'));
console.table(products);

// Sorting product by price
console.log('Products sorted by price:');
products.sort(compareBy('Price')); // 'Price' should be in camel case
console.table(products);
