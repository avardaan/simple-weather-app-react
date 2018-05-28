import axios from 'axios'

// OpenWeatherMap API Key import
import { weatherAPIKey } from '../utilities/config'
const API_KEY = weatherAPIKey
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?`
// make single variable of action type because wrong variable name will raise error;
// whereas wrong string name will just run but action won't hit appropriate reducer
export const FETCH_WEATHER = 'FETCH_WEATHER'

// this function fetches the weather object for a particular city that the user searched for
// upon pressing submit, it fetches the data and sends the action to the reducers
export function fetchWeather(city) {
  // final request url
  const url = `${ROOT_URL}q=${city},us&appid=${API_KEY}`
  // make GET request, returns a promise, not resolved!!
  const request = axios.get(url)
  // when we pass a promise to the payload property of the action
  // redux-promise realizes that it's a promise, and halts the movement of this action to the reducers
  // until the promise resolves and has the actual data (or error)
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
