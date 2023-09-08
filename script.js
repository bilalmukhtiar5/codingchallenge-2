//Question 2
//part 1


let userAge = 17;
if (userAge >= 18) {
    console.log("User 18 years old or older");
} else {
    console.log("user Can not Vote");
}


// part 2 


let userGrade = "C";
if(userGrade === "A"){
    console.log("Great Job");
}else if(userGrade === "B") {
    console.log("Great");
}else if(userGrade === "C") {
    console.log("Excellent");
}else if(userGrade === "D") {
    console.log("Work hard");
}else if(userGrade === "F") {
    console.log("Sorry You are fail");
}


//part-3

// program that checks if the number is positive, negative or zero
// input from the user
const number = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}

// check if number is 0
else if (number == 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
     console.log("The number is negative");
}