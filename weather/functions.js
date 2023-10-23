import {regions} from "./main";

async function get_data() {
    // API KEY: f40ac14d5e8bb26ea2c3385142470cff
    // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}

    let weather_idahofalls = "https://api.openweathermap.org/data/3.0/onecall?lat=43.467&lon=-112.034&appid=f40ac14d5e8bb26ea2c3385142470cff";
    let weather_data = await fetch(weather_idahofalls);

   return weather_data;
};

console.log (get_data());

// export default {};