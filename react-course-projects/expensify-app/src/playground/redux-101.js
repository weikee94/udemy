import { createStore } from 'redux';

// redux state container
const store = createStore((state = { count: 0 }) => {
    return state;
});

console.log(store.getState());

// old way to set state
// this.setState((prevState) => {
//     return prevState;
// });