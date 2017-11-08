import { createStore, combineReducers } from 'redux';

// add expense
// remove expense
// edit expense
// set text filter
// sort by date
// sort by amount
// set start date
// set end date

// expense Reducer
const expenseReducerDefaultState = [];

const expensesReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

// filter Reducer
// text => '' , sortBy => 'date' , startDate => undefined, endDate => undefined
const filterReducerDefaultState = { text: '', sortBy: 'date', startDate: undefined, endDate: undefined };

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

console.log(store.getState());


const demoState = {
    expenses: [
        {
            id: 'abcs',
            description: 'Jan Rent',
            note: 'Final payment for that address',
            amount: 54500,
            createAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};