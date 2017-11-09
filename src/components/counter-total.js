import React, { Component } from 'react';
import { connect } from 'react-redux';

import Counter from './counter'

class CounterTotal extends Component {
    constructor(props) {
        super(props)

    }

    getTotal() {
        if (this.props.counters.length === 0) {
            return 0
        }
        return this.props.counters.reduce((acc, counter) => {
            return acc + counter.count
        }, 0)
    }

    render() {
        console.log(this.getTotal())
        return <h1>{this.getTotal()}</h1>
    }
}


const mapStateToProps = (state) => {
  return { counters: state.counters }
}

//export default connect(mapStateToProps)(Counter);
export default connect(mapStateToProps)(CounterTotal);
