import { createStore } from 'redux';

const add = (data) => {
    return data.a + data.b;
}
console.log(add({a: 1, b: 12})); // 13

// more advanced
const addDestructure = ({ a, b }) => {
    return a + b;
}
console.log(addDestructure({ a: 1, b: 13 }));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const reset = () => ({
    type: 'RESET'
});

const set = ({ count = 1 } = {}) => ({
    type: 'SET',
    count: count
});

// reducer
// 1. is a pure function
// 2. never change state or action

const countReducer = () => (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
};

// redux state container
const store = createStore(countReducer());

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount({ incrementBy: 10 }));

store.dispatch(reset());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy : 10 }));

store.dispatch(set({ count: 99 }));

