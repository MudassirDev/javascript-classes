// function do tarike se bante hain
// do tarah ke functions hote hain

// function declaration
function calculateData() {
    console.log("this line is in calculateData");
}

// function expression
// function expression aur function declaration ka kaam same hota hai
const getData = () => {
    console.log("this line is in getData"); // ye line console mein print karwane keliye hai
} // arrow function

// function ko yahan call kr rahe hain
getData();
calculateData();