import { INCREMENT,
         DECREMENT,
         NEW_COUNTER,
         INCREMENT_ALL,
         RESET_COUNT,
         INCREMENT_FIVE,
         DELETE_COUNTER } from '../actions'

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
                    return { name: counter.name, count: ++counter.count }
                } else {
                    return { name: counter.name, count: counter.count }
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
                return { name: counter.name, count: counter.count }
                // return action.payload === index ? --count : count
            })
            break
        case INCREMENT_ALL:
            return state.map((counter) => {
                return { name: counter.name, count: ++ counter.count }
            })
            break
        case RESET_COUNT:
            return state.map((counter, index) => {
                if (action.payload === index) {
                    return { name: counter.name, count: 0}
                }
                return { name: counter.name, count: counter.count }
            })
            break
        case INCREMENT_FIVE:
            return state.map((counter, index) => {
                return action.payload === index ? { name: counter.name, count: counter.count +=5 } : { name: counter.name, count: counter.count }
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
            return [...state, { name: newName, count: 0 }] // {name:"", count: 0}
            break
        default:
            return state
    }
}

export default counterReducer
