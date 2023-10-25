// API KEY: f40ac14d5e8bb26ea2c3385142470cff


export async function groupRegionsByCategory(regions) {
// At least one array is used in the application.
    const regions = [
        "Northeast_Connecticut", "Northeast_Delaware", "Northeast_Maine", "Northeast_Maryland", "Northeast_Massachusetts", "Northeast_New Hampshire", "Northeast_New Jersey", "Northeast_New York", "Northeast_Pennsylvania", "Northeast_Rhode Island", "Northeast_Vermont", "Southeast_Alabama", "Southeast_Arkansas", "Southeast_Florida", "Southeast_Georgia", "Southeast_Kentucky", "Southeast_Louisiana", "Southeast_Mississippi", "Southeast_North Carolina", "Southeast_South Carolina", "Southeast_Tennessee", "Southeast_Virginia", "Southeast_West Virginia", "West_Alaska", "West_Arizona", "West_California", "West_Colorado", "West_Hawaii", "West_Idaho", "West_Montana", "West_Nevada", "West_New Mexico", "West_Oregon", "West_Utah", "West_Washington", "West_Wyoming", "Midwest_Illinois", "Midwest_Indiana", "Midwest_Iowa", "Midwest_Kansas", "Midwest_Michigan", "Midwest_Minnesota", "Midwest_Missouri", "Midwest_Nebraska", "Midwest_North Dakota", "Midwest_Ohio", "Midwest_South Dakota", "Midwest_Wisconsin"];

    // At least one array method of the type of filter, map, reduce, or at is used in the application.
    const groupedRegions = regions.reduce((accumulator, region) => {
        // At least one instance of conditional branching is used.
        if (region.includes("Northeast")) {
            accumulator.Northeast.push(region);
        } else if (region.includes("Southeast")) {
            accumulator.Southeast.push(region);
        } else if (region.includes("West")) {
            accumulator.West.push(region);
        } else if (region.includes("Midwest")) {
            accumulator.Midwest.push(region);
        }
        return accumulator;
    }, { Northeast: [], Southeast: [], West: [], Midwest: [] });

    return groupedRegions;
}

export async function get_data(URL) {
    // Fetch is used to get JSON data and used in the application.
    let weather_data = await fetch(URL);
    weather_data = await weather_data.json();

   return weather_data;
};

export async function weather_display_northeast(){
    let data = await get_data("https://api.openweathermap.org/data/2.5/weather?lat=43.467&lon=-112.034&appid=f40ac14d5e8bb26ea2c3385142470cff");
    let display = document.getElementById("weather_data_display");

    let temp = data.main.temp;
    let temp_element = document.createElement("p")
    temp_element.innerHTML = temp;
    display.appendChild(temp_element);
};

export async function weather_display_southwest(){
    let data = await get_data("https://api.openweathermap.org/data/2.5/weather?lat=37.839&lon=-84.270&appid=f40ac14d5e8bb26ea2c3385142470cff");
    let display = document.getElementById("weather_data_display");

    let temp = data.main.temp;
    let temp_element = document.createElement("p")
    temp_element.innerHTML = temp;
    display.appendChild(temp_element);
};

export async function weather_display_west(){
    let data = await get_data("https://api.openweathermap.org/data/2.5/weather?lat=36.778&lon=119.4179&appid=f40ac14d5e8bb26ea2c3385142470cff");
    let display = document.getElementById("weather_data_display");

    let temp = data.main.temp;
    let temp_element = document.createElement("p")
    temp_element.innerHTML = temp;
    display.appendChild(temp_element);
};

export async function weather_display_southeast(){
    let data = await get_data("https://api.openweathermap.org/data/2.5/weather?lat=35.201&lon=91.831&appid=f40ac14d5e8bb26ea2c3385142470cff");
    let display = document.getElementById("weather_data_display");

    let temp = data.main.temp;
    let temp_element = document.createElement("p")
    temp_element.innerHTML = temp;
    display.appendChild(temp_element);
};

export async function weather_display_midwest(){
    let data = await get_data("https://api.openweathermap.org/data/2.5/weather?lat=40.000&lon=-89.000&appid=f40ac14d5e8bb26ea2c3385142470cff");
    let display = document.getElementById("weather_data_display");

    let temp = data.main.temp;
    let temp_element = document.createElement("p")
    temp_element.innerHTML = temp;
    display.appendChild(temp_element);
};

export async function weather_display(region) {
    let coordinates = getRegionCoordinates(region);
    let data = await get_data(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=f40ac14d5e8bb26ea2c3385142470cff`);
    let display = document.getElementById("weather_data_display");

    let temp = kelvin_to_fahrenheit(data.main.temp); // 
    let temp_element = document.createElement("p");
    temp_element.innerHTML = `Region: ${region}, Temperature: ${temp.toFixed(2)}°F`;
    display.appendChild(temp_element);
}

function getRegionCoordinates(region) {
    const coordinates = {
        "Northeast": { lat: 43.467, lon: -112.034 },
        "Southeast": { lat: 37.839, lon: -84.270 },
        "West": { lat: 36.778, lon: 119.4179 },
        "Southwest": { lat: 35.201, lon: 91.831 },
        "Midwest": { lat: 40.000, lon: -89.000 }
    };

    return coordinates[region];
}

export function kelvin_to_fahrenheit(kelvin_temp){
    var fah_temp = ((kelvin_temp - 273.15) * 9/5) + 32;
    return fah_temp;
};