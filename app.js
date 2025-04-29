console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    } else {

    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let i = 0;
while (i < 100) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}

console.log("--------------------");

let x = 0;
do {
    if (x % 2 !== 0) {
        console.log(x);
    }
    x++;
} while (i < 100);

console.log("--------------------");

let a = 0;
while (a < 100) {
    if (a % 3 === 0 && a % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (a % 3 === 0) {
        console.log("Fizz");
    } else if (a % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(a);
    }
    a++
}

console.log("--------------------");

let b = 0;
do {
    if (b % 3 === 0 && b % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (b % 3 === 0) {
        console.log("Fizz");
    } else if (b % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(b);
    }
    b++
}
while (b < 100);

console.log("--------------------");

//Exercise 4 Section

let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100); 

let found = false;

for (let i = 0; i <= n; i++) {
    if (i === value) {
        console.log("Found value!");
        found = true;
        break;
    }
}

if (!found) {
    console.log("Did not find value");
}

// Exercise 5 Section

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

let q = start;

while (q <= end) {
    if (q % fizzDivisor === 0 && q % buzzDivisor === 0) {
        console.log("FizzBuzz");
    }
    else if (q % fizzDivisor === 0) {
        console.log("Fizz");
    } else if (q % buzzDivisor === 0) {
        console.log("Buzz");
    } else {
        console.log(q);
    }
    q++;
}