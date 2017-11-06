import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
        Not Found
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>   
            <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
            <Route path="/create" component={AddExpensePage}></Route>
            <Route path="/edit" component={EditExpensePage}></Route>
            <Route path="/help" component={HelpPage}></Route>
            <Route component={NotFoundPage}></Route>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

