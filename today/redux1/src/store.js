

import {
    createStore
} from "redux";

import { composeWithDevTools} from 'redux-devtools-ext';
import counterReducer from "./counterReducer";

const reducer = {
    counterValue: counterReducer
};

const enhanser = composeWithDevTools();

const store = createStore(reducer, enhanser);

console.log(store.getState);

// console.dir(createStore);

const initialState = 0;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;


        case "DECREMENT":
            return state - action.payload;

        case "RESET":
            return 0;

        default:
            return state;

    }


};



const store = createStore(reducer,1000);
console.log(store.getState());

const ACTION_TYPES={ 
    INCREMENT:"INCREMENT",
    DECREMENT: "DECREMENT",
    RESET:"RESET"
}
const incrementAction = (value)=> ({
    type: ACTION_TYPES.INCREMENT,
    payload: value
});

const decrementAction = value => ( {
    type: ACTION_TYPES.DECREMENT,
    payload : value 
});

const resetAction = {
    type: ACTION_TYPES.RESET
};


store.dispatch(incrementAction(10));
console.log(store.getState());
store.dispatch(incrementAction(100));
console.log(store.getState());
store.dispatch(decrementAction(25));
console.log(store.getState());
store.dispatch(resetAction);
console.log(store.getState());