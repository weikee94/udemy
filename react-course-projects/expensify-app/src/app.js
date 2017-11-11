import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { getVisibleExpenses } from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// add expense -> water bill
// add expense -> gas bill
// setTextFilter -> bill (2 items) -> water (1 item)
// getVisibleExpenses -> print visibles one to screen
store.dispatch(addExpense({description: 'water', amount: 100, createdAt: 2000}));
store.dispatch(addExpense({description: 'gas', amount: 200, createdAt: 3000}));
store.dispatch(setTextFilter('as'));

const state = store.getState();
const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpense);

// console.log(store.getState());
const jsx = (
    <Provider store={store}>
        <AppRouter />    
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

