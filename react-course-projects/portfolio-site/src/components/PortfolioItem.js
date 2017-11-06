import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const PortfolioItem = (props) => (
    <div>
        <h1>A thing I done</h1>
        <p>Checkout the things I have done with id {props.match.params.id}</p>
    </div>
);

export { PortfolioItem };