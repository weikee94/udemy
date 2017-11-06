import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { ExpenseDashboardPage } from '../components/ExpenseDashboardPage';

import { NotFoundPage } from '../components/NotFoundPage';
import { Header } from '../components/Header';
 
// Portfolio Router
// Show header/nav bar on all page including 404

// / -> Home Page (in nav)
// /portfolio -> Portfolio home page with links to items (in nav)
// /portfolio/123 -> Individual portfolio item page that shows the ID
// /contact -> Contact page (in nav)

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>   
        <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
    
        <Route component={NotFoundPage}></Route>
    </Switch>
    </div>
</BrowserRouter>
);

export { AppRouter };