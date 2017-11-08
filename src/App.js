import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
import ListCounter from './components/list-counter'
import CounterTotal from './components/counter-total'

import logo from './logo.svg'
import './App.css'

import { incrementCounter, incrementAll } from './actions'
const store = createStore(reducers)

setInterval(() => {
    // store.dispatch(incrementCounter(0))
    store.dispatch(incrementAll())
}, 1000)

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="App">
        <CounterTotal />
        <ListCounter />
      </div>
    </Provider>
    );
  }
}

export default App;
