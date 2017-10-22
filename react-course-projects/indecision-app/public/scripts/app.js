'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecison App'
    ),
    React.createElement(
        'p',
        null,
        'Info for apps'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'One'
        ),
        React.createElement(
            'li',
            null,
            'Two'
        )
    )
);

// Create a templateTwo with var JSX expression
// div
//  h1 -> name
//  p  -> age: 26
//  p  -> location: jb
// rednder template two

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Wkhaw'
    ),
    React.createElement(
        'p',
        null,
        'Age: 24'
    ),
    React.createElement(
        'p',
        null,
        'Location: JB'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
