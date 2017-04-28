import {FETCH_WEATHER} from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            //create a new array with the new data followed by the existing state
            //this uses the spread operator
            //https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator
            return [action.payload.data,...state];
    }

    return state;

}