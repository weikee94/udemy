'use strict';

console.log('builddd it works');

var initialDetail = false;

var showDetails = function showDetails() {
    initialDetail = !initialDetail;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        initialDetail && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey this is the hidden message'
            )
        ),
        React.createElement(
            'button',
            { onClick: showDetails },
            initialDetail ? 'hideDetails' : 'showDetails'
        )
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

render();
