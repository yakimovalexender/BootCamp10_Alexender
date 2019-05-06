import types from "./actionTypes";

const incrementAction = value => ({
  type: types.INCREMENT,
  payload: value
});

const decrementAction = value => ({
  type: types.DECREMENT,
  payload: value
});

const resetAction = {
  type: types.RESET
};

export { increment, decrement, reset };
