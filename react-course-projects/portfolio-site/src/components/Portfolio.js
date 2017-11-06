import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Portfolio = () => (
    <div>
        <h1>My Work</h1>
        <p>Checkout the things I have done</p>
        <Link to="/portfolio/1">Item One</Link>
        <Link to="/portfolio/2">Item Two</Link>
    </div>
);

export { Portfolio };