let fruits = ['Apple', 'Banana', 'Orange'];
let students = [
    {
        firstName: 'John',
        lastName: 'Doe',
        index: 20201
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        index: 20202
    },
    {
        firstName: 'David',
        lastName: 'Vinoth',
        index: 20203
    },
    {
        firstName: 'Divya',
        lastName: 'Ishitha',
        index: 20204
    },
    {
        firstName: 'Thomas',
        lastName: 'Edgardson',
        index: 20205
    }
];

//1. Loop through the arrays and print the elements.

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
};



//2. Loop through the students array and print:

//a.the properties of the objects.

for (let i = 0; i < students.length; i++) {
    let objectProp = students[i];

    for (let propertyOf in objectProp) {

        console.log(propertyOf);
    }
}


//b.the values of the properties in the objects.

for (let i = 0; i < students.length; i++) {
    let objectProp = students[i];

    for (let propertyOf in objectProp) {

        console.log(objectProp[propertyOf]);
    }
}


// 3. Create a loop and print the first 10 numbers.

for (let i = 0; i<10; i++) {
    console.log(i);
};

// 4. Create a loop and print the first 10 numbers (even only - hint start from 0 and increase the counter for 2).

for (let i = 0; i < 10; i += 2) {
    console.log(i); 
};

//a. starting from 0 && using a conditional statement (increase the counter for 1)

for (let i = 0; i < 10; i += 1) { // i += 1 ?????
    if (i % 2 == 0) {
        console.log(i)
    }
};

// 5. Create a loop and print the first 10 numbers (odd only - hint start from 1 and increase the counter for 2).

for (let i = 1; i < 10; i += 2) {
    console.log(i); 
};

// a. starting from 0 && using a conditional statement (increase the counter for 1) 

for (let i = 0; i < 10; i += 1) { 
    if (i % 2 != 0) {
        console.log(i)
    }
};

// 6. Find a way to check the type of the array (except for the typeof command).

Array.isArray(fruits);
console.log(fruits);



