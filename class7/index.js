function test() {
    console.log("this is test");
}
// arrays
// jab hume multiple values aik variable ke andar store krni ho tou array wahan kaam ata hai
// multiples values store krne keliye jo data structure istemal hota hai use array kehte hain
const cars = ["civic", 12, 12 + 1, false, test];
console.log(cars);

// index starts from 0
// index position hoti hai elements ki array ke andar
console.log(cars[1]);
cars[4]();

// at
console.log(cars.at(-1))

cars[4] = "ok";
console.log(cars[4]);
