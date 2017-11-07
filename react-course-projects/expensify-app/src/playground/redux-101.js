import { createStore } from 'redux';

// redux state container
const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
});

console.log(store.getState());

// Actions - an object that gets sent to the store
// increment, decrement, reset

// increment
store.dispatch({
    type: 'INCREMENT'
});

// increment
store.dispatch({
    type: 'INCREMENT'
});

// reset
store.dispatch({
    type: 'RESET'
});

// decrement
store.dispatch({
    type: 'DECREMENT'
});

console.log(store.getState());
