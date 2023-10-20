async function get_data() {
    // API KEY: f40ac14d5e8bb26ea2c3385142470cff
    // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}

    let weather_idahofalls = "https://api.openweathermap.org/data/3.0/onecall?lat=43.467&lon=-112.034&appid=f40ac14d5e8bb26ea2c3385142470cff";

    //Fetch is used to get JSON data and used in the application.
    let weather_data = await fetch(weather_idahofalls);

   return weather_data;
};

console.log (get_data());

//At least one module is used with supporting import and export functionality. EXAMPLE NOT PART OF ANYTHING
export default {get_data, anotherimaginaryfunctionthatdoesnotexistrightnow};