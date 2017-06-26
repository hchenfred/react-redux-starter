import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/types';

export default function counterReducer(state = 0, { type, payload }) {
  switch (type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return 0;
  }
}