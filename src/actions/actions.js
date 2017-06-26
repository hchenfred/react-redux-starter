import {
  EXAMPLE_ACTION
} from './types';

export function exampleAction() {
  return {
    type: EXAMPLE_ACTION,
    payload: 'Here\'s an example action!'
  };
}