import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        Not Found - <Link to="/">Home</Link>
    </div>
);

export { NotFoundPage };