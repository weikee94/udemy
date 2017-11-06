import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { HomePage } from '../components/HomePage';
import { Portfolio } from '../components/Portfolio';
import { PortfolioItem } from '../components/PortfolioItem';
import { Contact } from '../components/Contact';
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
            <Route path="/" component={HomePage} exact={true}></Route>
            <Route path="/portfolio" component={Portfolio} exact={true}></Route>
            <Route path="/portfolio/:id" component={PortfolioItem}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route component={NotFoundPage}></Route>
        </Switch>
    </div>
</BrowserRouter>
);

export { AppRouter };