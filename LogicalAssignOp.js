/*
// Logical Assignment Operator  OR (||=)
let title;
title ||= 'untitled';
console.log(title);

// Example 2 - of Logical Assignment Operator
let title = 'JavaScript is Awsome';
title ||= 'untitled';
console.log(title);
*/

// Logical AND Assignment Operator - example
let person = {
    firstName = 'John',
    lastName = 'Doe',
};

person.lastName&&= 'smith';
console.log(person);