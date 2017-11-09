import { INCREMENT,
         DECREMENT,
         NEW_COUNTER,
         INCREMENT_ALL,
         RESET_COUNT,
         INCREMENT_FIVE,
         DELETE_COUNTER } from '../actions'

const counterReducer = (state = [99], action) => {
    console.log(action);
    switch (action.type) {
        case INCREMENT:
            let newState = state.map((item, index) => {
                console.log(action.payload, index, item, action.payload === index);
                if (action.payload === index) {
                    // console.log("*****", item);
                    // item++
                    // console.log("*****", item);
                    // item.count += 1
                    return ++item
                } else {
                    return item
                }
                // return action.payload === index ? count++ : count
            })
            console.log(newState); // [99, 88, 77]
            return newState;
            break
        case DECREMENT:
            return state.map((count, index) => {
                /*
                if (action.payload === index) {
                    count.count -= 1
                }

                return count
                */
                return action.payload === index ? --count : count
            })
            break
        case INCREMENT_ALL:
            return state.map((count) => {
                return ++ count
            })
            break
        case RESET_COUNT:
            return state.map((count, index) => {
                if (action.payload === index) {
                    return 0
                }
                return count
            })
            break
        case INCREMENT_FIVE:
            return state.map((count, index) => {
                return action.payload === index ? count += 5 : count
            })
            break
        case DELETE_COUNTER:
            state.splice(action.payload, 1)
            return [...state]
            break
        case NEW_COUNTER:
            return [...state, 0] // {name:"", count: 0}
        // case RESET_COUNT:
        //     return 0
        // break
        default:
            return state
    }
}

export default counterReducer
