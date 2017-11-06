import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        Dashboard
    </div>
);

const AddExpensePage = () => (
    <div>
        Add
    </div>
);

const EditExpensePage = () => (
    <div>
        Edit
    </div>
);

const HelpPage = () => (
    <div>
        Help
    </div>
);

const NotFoundPage = () => (
    <div>
        Not Found - <Link to="/">Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

// link to home page
// link to create expense page
// link to the edit page
// linking to the help page

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>   
            <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
            <Route path="/create" component={AddExpensePage}></Route>
            <Route path="/edit" component={EditExpensePage}></Route>
            <Route path="/help" component={HelpPage}></Route>
            <Route component={NotFoundPage}></Route>
        </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

