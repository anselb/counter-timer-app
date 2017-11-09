export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const RESET_COUNT = "RESET_COUNT"
export const NEW_COUNTER = "NEW_COUNTER"
export const INCREMENT_ALL = "INCREMENT_ALL"
export const INCREMENT_FIVE = "INCREMENT_FIVE"
export const DELETE_COUNTER = "DELETE_COUNTER"


// counters: [1, 33, 2, 5]
// counters: [{name: "A", count: 1}, {name:"B", count: 33}, ...]

export const newCounter = () => {
    return {
        type: NEW_COUNTER,
        payload: ""
    }
}

export const incrementCounter = (index) => {
    return {
        type: INCREMENT,
        payload: index
    }
}

export const incrementFive = (index) => {
    return {
        type: INCREMENT_FIVE,
        payload: index
    }
}

export const incrementAll = () => {
    return {
        type: INCREMENT_ALL
    }
}

export const decrementCounter = (index) => {
    return {
        type: DECREMENT,
        payload: index
    }
}

export const deleteCounter = (index) => {
    return {
        type: DELETE_COUNTER,
        payload: index
    }
}

export const resetCounter = (index) => {
    return {
        type: RESET_COUNT,
        payload: index
    }
}
