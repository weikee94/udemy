console.log('App.js is running!');

// JSX - JavaScript XML

// if statements
// ternary operator
// logical and operator

// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 'Here are your options' 'No options'

let app = {
    title: 'Indecision App',
    subtitle: 'Information',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>One</li>
            <li>Two</li>
        </ol>
    </div>
);

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

let user = {
    name: 'Wkhaw',
    age: 23,
    location: 'malaysia'
};

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >=18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

