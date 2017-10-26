'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Information',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        renderTemplate();
        e.target.elements.option.value = '';
    }
};

var removeAll = function removeAll() {
    app.options = [];
    renderTemplate();
};

var onMakeDecision = function onMakeDecision() {
    var ranNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[ranNum];
    alert(option);
};

var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What to do'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'remove'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    'Option: ',
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
// Create render function that renders the new jsx
// Call it right away
// Call it after options array added to

renderTemplate();
