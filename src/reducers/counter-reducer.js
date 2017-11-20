import { INCREMENT,
         DECREMENT,
         NEW_COUNTER,
         INCREMENT_ALL,
         RESET_COUNT,
         INCREMENT_FIVE,
         DELETE_COUNTER,
         IS_RUNNING } from '../actions'

const counterReducer = (state = [], action) => {
    console.log(action);

    switch (action.type) {
        case INCREMENT:
            let newState = state.map((counter, index) => {
                console.log(action.payload, index, counter, action.payload === index);

                if (action.payload === index) {
                    // console.log("*****", item);
                    // item++
                    // console.log("*****", item);
                    // item.count += 1
                    return { name: counter.name, count: ++counter.count, running: counter.running }
                } else {
                    return { name: counter.name, count: counter.count, running: counter.running }
                }
                // return action.payload === index ? count++ : count
            })
            console.log(newState); // [99, 88, 77]
            return newState;
            break
        case DECREMENT:
            return state.map((counter, index) => {
                if (action.payload === index) {
                    counter.count -= 1
                }
                return { name: counter.name, count: counter.count, running: counter.running }
                // return action.payload === index ? --count : count
            })
            break
        case INCREMENT_ALL:
            return state.map((counter) => {
                if (counter.running === true) {
                    return { name: counter.name, count: ++ counter.count, running: counter.running }
                }
                return { name: counter.name, count: counter.count, running: counter.running }
            })
            break
        case RESET_COUNT:
            return state.map((counter, index) => {
                if (action.payload === index) {
                    return { name: counter.name, count: 0, running: counter.running}
                }
                return { name: counter.name, count: counter.count, running: counter.running }
            })
            break
        case INCREMENT_FIVE:
            return state.map((counter, index) => {
                return action.payload === index ? { name: counter.name, count: counter.count +=5, running: counter.running } : { name: counter.name, count: counter.count, running: counter.running }
            })
            break
        case DELETE_COUNTER:
            state.splice(action.payload, 1)
            return [...state]
            break
        // case IS_RUNNING:
        //
        //     break
        case NEW_COUNTER:
            let newName = "Timer " + String(state.length + 1)
            return [...state, { name: newName, count: 0, running: true }] // {name:"", count: 0}
            break
        case IS_RUNNING:
            return state.map((counter, index) => {
                if (action.payload == index) {
                    return counter.running === true ? { name: counter.name, count: counter.count, running: false } : { name: counter.name, count: counter.count, running: true }
                }
                return { name: counter.name, count: counter.count, running: counter.running }
            })
            break
        default:
            return state
    }
}

export default counterReducer
