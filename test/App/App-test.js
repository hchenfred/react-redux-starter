import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import mockStore from '../../src/Store';
import App from '../../src/components/app';
import { exampleAction } from '../../src/actions/actions';
import { EXAMPLE_ACTION } from '../../src/actions/types';
import appReducer from '../../src/reducers/appReducer';


describe('<App />', function() {


  describe('rendering', function() {
    it('should render', function() {
      const wrapper = mount(
        <Provider store={mockStore}>
          <App />
        </Provider>
      );
      expect(wrapper.contains(
        <p>Execute action creator to see example rendered.</p>
      )).to.equal(true);
    });
  });

  describe('actions', function() {
    it('should execute action', function() {
      const action = exampleAction();
      expect(action.type).to.equal(EXAMPLE_ACTION);
      expect(action.payload).to.equal('Here\'s an example action!');
    });
  });

  describe('reducers', function() {

    it('should default to empty object', function() {
      const state = {};
      const action = { 
        type: 'NONE',
        payload: 'NONE'
      };
      const result = appReducer(state, action);
      expect(result).to.equal(state);
    });

    it('should return new state object on new action type', function() {
      const oldState = {};
      const action = {
        type: EXAMPLE_ACTION,
        payload: 'A test payload'
      };
      const result = appReducer(oldState, action);
      expect(result.example).to.equal('A test payload');
      expect(result).to.not.equal(oldState);
    });
  });

});
