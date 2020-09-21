import { createAction, handleActions } from 'redux-actions';
// define action type
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// define action dispatch function
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// define init state of module
const initialState = {
  number: 0
};

// reducer
export default handleActions({
  [INCREMENT]: (state, action) => {
    return { number: state.number + 1 };
  },
  [DECREMENT]: ({number}) => ({ number: number - 1 })
}, initialState);
