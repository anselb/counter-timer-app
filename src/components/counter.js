import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { incrementCounter, decrementCounter, resetCounter } from '../actions';

class Counter extends Component {

  render() {
    return (
      <div>

        <h1>{this.props.count}</h1>

        <p>{this.props.name}</p>

        <button onClick={() => {
            this.props.onUp()
            // this.props.incrementCounter()
          //console.log("increments counter");
        }}>Up</button>

        <button onClick={() => {
            this.props.onDown()
            // this.props.decrementCounter()
          //console.log("decrements counter");
        }}>Down</button>

        <button onClick={() => {
            this.props.onReset()
          //console.log("decrements counter");
      }}>Reset</button>

        <button onClick={() => {
            this.props.onUpFive()
        }}>+5</button>

        <button onClick={() => {
            this.props.onDelete()
        }}>Delete</button>

        <button onClick={() => {
            this.props.startStop()
        }}>Start/Stop</button>

      </div>
    );
  }
}

export default Counter;

//
// const mapStateToProps = (state) => {
//   return { counter: state.counter }
// }
//
//export default connect(mapStateToProps)(Counter);
// export default connect(
//     mapStateToProps,
//     {
//         incrementCounter,
//         decrementCounter,
//         resetCounter
//     })(Counter);
