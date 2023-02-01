let registrationForm = document.querySelector(".registration-form");
let diceImage = document.querySelector(".dice-image");
let coupon = document.querySelector(".coupon");
let congratulatoryImage = document.querySelector(".congratulatory-image");
let badLuck = document.querySelector(".bad-luck");

let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");

let name = document.getElementById("name");
let email = document.getElementById("email");
let username = document.getElementById("username");

let diceSum = 0;
let attempt = 0;
let count = 0;
let win = 0;

function openRegistrationForm() {
    if (image1.clicked === true) {
        return;
    }
    registrationForm.style.display = "block";
    image1.clicked = true;
}

function registerUser() {
    let nameValue = name.value;
    let emailValue = email.value;
    let usernameValue = username.value;

    // check for empty values
    if (nameValue === "" || emailValue === "" || usernameValue === "") {
        alert("Please enter all the values");
        return;
    }

    // save the user's details
    localStorage.setItem("name", nameValue);
    localStorage.setItem("email", emailValue);
    localStorage.setItem("username", usernameValue);
    registrationForm.style.display = "none";
    image2.clicked = true;
}

// displaying user details
function showUsername() {
    let nameValue = localStorage.getItem("name");
    let usernameValue = localStorage.getItem("username");
    document.getElementById(
        "info"
    ).innerHTML = (`Name: ${nameValue}\nUsername: ${usernameValue}`);
    info.style.display = "block";
};




function showDice() {

    if (diceSum <= 10 && attempt === 3) {
        prompt("try again")
    }

    if (image3.clicked === true) {
        count += 1;
        if (count == 1 && win == 1) {
            return
        } else if (count == 2) {
            return;
        }

    }
    info.style.display = "none";
    badLuck.style.display = "none";
    diceImage.style.display = "block";
    image3.clicked = true;

}

// generating random number 
function generateDiceNumber() {
    if (attempt == 3) {
        diceSum = 0;

    }
    let diceNumber = Math.floor(Math.random() * 6) + 1;
    diceSum += diceNumber;
    document.getElementById(
        "dice-result"
    ).innerHTML = `You attempt ${attempt + 1}.You rolled a ${diceNumber}. The total is ${diceSum}.`;

    attempt += 1;
}

// creating 12 digit random no. cupon code
function generateCoupon() {
    if (diceSum >= 10) {
        let couponNumber = Math.floor(Math.random() * 1000000000000) + 1;
        document.getElementById(
            "coupon-number"
        ).innerHTML = `Your coupon number is ${couponNumber}.`;
        coupon.style.display = "block";
        diceImage.style.display = "none";
        congratulatoryImage.style.display = "block";
        win += 1;
    } else if (diceSum <= 10 && attempt === 3) {
        prompt("try again")
    } else if (diceSum <= 10 && attempt === 6) {
        diceImage.style.display = "none";
        badLuck.style.display = "block";

    }
}
