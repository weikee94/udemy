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

// redux state container
const store = createStore((state = { count: 0 }, action) => {
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
});

store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount({ incrementBy: 10 }));

store.dispatch(reset());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy : 10 }));

store.dispatch(set({ count: 101 }));

