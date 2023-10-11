/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = "Jade Miller";
let currentYear = new Date().getFullYear();
let profilePicture = "images/profile.jpeg";
let nameElement = document.getElementById("name");
let foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
let imageElement = document.querySelector("img");
let favoriteFoods = ["Gyro", "Sushi", "Iceciles"];
let oneFood = "Garlic Bread";

nameElement.innerHTML = `<strong>${fullname}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullname}`);
foodElement.innerHTML = favoriteFoods;
favoriteFoods.push(oneFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;

/* Step 3 - Element Variables */





/* Step 4 - Adding Content */






/* Step 5 - Array */






