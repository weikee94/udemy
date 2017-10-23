console.log('App.js is running!');

// JSX - JavaScript XML

// create app object title/subtitle
// use title and subtitle in the template
// render template

var app = {
    title: 'Indecision App',
    subtitle: 'Information'
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>One</li>
            <li>Two</li>
        </ol>
    </div>
);

var user = {
    name: 'Wkhaw',
    age: 23,
    location: 'malaysia'
};

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

