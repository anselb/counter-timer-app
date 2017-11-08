import React, { Component } from 'react';
import { connect } from 'react-redux';

import Counter from './counter'

class CounterTotal extends Component {
    constructor(props) {
        super(props)

    }

    getTotal() {
        return this.props.counters.reduce((acc, count) => {
            return acc + count
        })
    }

    render() {
        return <h1>{this.getTotal()}</h1>
    }
}


const mapStateToProps = (state) => {
  return { counters: state.counters }
}

//export default connect(mapStateToProps)(Counter);
export default connect(mapStateToProps)(CounterTotal);
