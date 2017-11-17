import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


// compare object use toEqual, orther use toBe
test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({ 
        type: 'REMOVE_EXPENSE',
        id: '123abc'
     })
});

// setup test case 
// call editExpense
// make an assertion
test('should setup edit expense action object', () => {
    const action = editExpense('123', { note: 'new note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: { note: 'new note' }
    })
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last month rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    // call addExpense with no data
    // assert the value of the return object
    const expenseData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});