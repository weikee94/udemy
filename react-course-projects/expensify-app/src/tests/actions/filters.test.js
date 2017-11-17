import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

test('should generate set text filter action object with provided values', () => {
    const action = setTextFilter('text');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'text'
    })
});

test('should generate set text filter action object with default values', () => {
    const action = setTextFilter('');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});

test('should generate sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should generate sort by date', () => {
    const action = sortByDate(0);
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        num: 0
    })
});

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action objecy', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});