// when we pass a promise to the payload property of the action
// redux-promise realizes that it's a promise, and halts the movement of this action to the reducers
// until the promise resolves and has the actual data (or error)

import { FETCH_WEATHER } from '../actions'

const INITIAL_STATE = []

export default function(state=INITIAL_STATE, action) {

  switch(action.type) {
    case FETCH_WEATHER:
      // resolved promise has data in promise.data field
      // fetchWeather action sends newest searched city data to this reducer, and it gets piled
      // on top of the state.weather array
      return [ action.payload.data, ...state ]

    default:
      return state
  }
}
