// create test file
// grab imports 
// render expense list item with the fixtures expenses
// create snapshot

import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('shoudl remder ExpenseListItem with ExpenseList', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});