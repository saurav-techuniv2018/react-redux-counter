import { INCREMENT, DECREMENT } from '../actions';

const defaultState = {
  count: 0,
};

const counter = (currentState = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: currentState.count + 1,
      };

    case DECREMENT:
      return {
        count: currentState.count - 1,
      };

    default:
      return currentState;
  }
};

export default counter;
