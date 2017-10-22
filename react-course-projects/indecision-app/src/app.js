console.log('App.js is running!');

// JSX - JavaScript XML

var template = (
    <div>
        <h1>Indecison App</h1>
        <p>Info for apps</p>
        <ol>
            <li>One</li>
            <li>Two</li>
        </ol>
    </div>
);

// Create a templateTwo with var JSX expression
// div
//  h1 -> name
//  p  -> age: 26
//  p  -> location: jb
// rednder template two

var templateTwo = (
    <div>
        <h1>Wkhaw</h1>
        <p>Age: 24</p>
        <p>Location: JB</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

