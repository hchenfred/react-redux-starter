import {
  EXAMPLE_ACTION
} from '../actions/types';

export default function appReducer(state = {}, { type, payload }) {
  switch (type) {
    case EXAMPLE_ACTION:
      return { ...state, example: payload };
    default:
      return state;
  }
}