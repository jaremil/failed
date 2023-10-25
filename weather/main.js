// At least one module is used with supporting import and export functionality.
import {weather_display_northeast, weather_display_southwest, weather_display_west, weather_display_southeast, weather_display_midwest} from "./functions.js";

let Northeast_button = document.getElementById("Northeast");
Northeast_button.addEventListener("click", weather_display_northeast);
let Southwest_button = document.getElementById("Southwest");
Southwest_button.addEventListener("click", weather_display_southwest);
let West_button = document.getElementById("West");
West_button.addEventListener("click", weather_display_west);
let Southeast_button = document.getElementById("Southeast");
Southeast_button.addEventListener("click", weather_display_southeast);
let Midwest_button = document.getElementById("Midwest");
Midwest_button.addEventListener("click", weather_display_midwest);