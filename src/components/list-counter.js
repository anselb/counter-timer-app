import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter,
         decrementCounter,
         newCounter,
         resetCounter,
         incrementFive,
         deleteCounter,
         isRunning } from '../actions';

import Counter from './counter'

class ListCounters extends Component {
    constructor(props) {
        super(props)

    }

    drawCounters() {
        return this.props.counters.map((counter, index) => {
            return <Counter
                    key={index}
                    count={counter.count}
                    name={counter.name}
                    index={index}
                    onUp={() => {
                        console.log("Counter on up!!!!! "+index);
                        this.props.incrementCounter(index);
                    }}
                    onDown={() => {
                        console.log("Counter on down!!!!! "+index);
                        this.props.decrementCounter(index)
                    }}
                    onReset={() => {
                        this.props.resetCounter(index)
                    }}
                    onUpFive={() => {
                        this.props.incrementFive(index)
                    }}
                    onDelete={() => {
                        this.props.deleteCounter(index)
                    }}
                    startStop={() => {
                        this.props.isRunning(index)
                    }}/>
        })
    }

    render() {
        return (
            <div>
                {this.drawCounters()}
                <button onClick={() => {
                    this.props.newCounter()
                }}>Add new Counter</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return { counters: state.counters }
}

//export default connect(mapStateToProps)(Counter);
export default connect(
    mapStateToProps,
    {
        incrementCounter,
        decrementCounter,
        resetCounter,
        incrementFive,
        newCounter,
        deleteCounter,
        isRunning

    })(ListCounters);
