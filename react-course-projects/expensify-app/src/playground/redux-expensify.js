import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// add expense
const addExpense = ( {description = '', note = '', amount = 0, createdAt = 0 } = {} ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
// remove expense
const removeExpense = ( { id } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});
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
        case 'ADD_EXPENSE':
            return [
                ...state, 
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => {
                return id !== action.id;
            })
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

store.subscribe(()=>{
    console.log(store.getState());    
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 400}));
store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense({  }));

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