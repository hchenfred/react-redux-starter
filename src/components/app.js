import React, { Component } from 'react';
import { connect } from 'react-redux';
import { exampleAction } from '../actions/actions';
import Counter from '../containers/Counter';

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.example}</h1>
        <button className="example-btn" onClick={this.props.exampleAction}> Click me to see an example action call </button>
        <p>Execute action creator to see example rendered.</p>
        <Counter />
      </div>
    );
  }
}

function mapStateToProps({ appReducer }) {
  return {
    example: appReducer.example
  };
}
export default connect(mapStateToProps, { exampleAction })(App);