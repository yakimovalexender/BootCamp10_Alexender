import types from "./actionTypes";

const initialState = 0;

const counterReuser = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return state + action.payload;

    case types.DECREMENT:
      return state - action.payload;

    case types.RESET:
      return 0;

    default:
      return state;
  }
};
