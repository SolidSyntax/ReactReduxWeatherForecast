import axios from 'axios';

const API_KEY = '4a5bcd2c80f235e135dae5ff72fc7a9b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

//fetchWeather has to be a FSA-Action (Flux-standard-action)
//in order to be compatible with redux-promise
//https://www.npmjs.com/package/redux-promise
//https://github.com/acdlite/flux-standard-action
export function fetchWeather(cityAndCountryName){
    const url = `${ROOT_URL}&q=${cityAndCountryName}`;

    //Axios middleware detects promises and wait for them to resolve
    //Afterwards it takes the resolved response and published it as the new payload
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}