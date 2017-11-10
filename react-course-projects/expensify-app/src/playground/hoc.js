// Higher Order Component (HOC) - A component(HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: { props.info }</p>
    </div>
);

// component start with uppercase letter
const withAdminWarning = (WrappedComponent) => {
    // this is higher order component
    return (props) => (
        <div>
            { props.isAdmin && <h1>This is private Info. Please dont share.</h1> }
            <WrappedComponent {...props}/>
        </div>
    );
};

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? ( <WrappedComponent  {...props} /> ) : ( <p>Please Login to view the info</p> )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="info from parent"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="info from parent"/>, document.getElementById('app'));