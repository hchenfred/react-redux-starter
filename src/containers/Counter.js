import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions/counter';
import { bindActionCreators } from 'redux';

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      { this.props.counter }
      <button onClick={this.props.incrementCounter}>+</button>
      <button onClick={this.props.decrementCounter}>-</button> 
    </div>)
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ incrementCounter, decrementCounter}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);