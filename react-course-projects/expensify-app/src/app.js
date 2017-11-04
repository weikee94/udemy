import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
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


const routes = (
    <BrowserRouter>
        <div>   
            <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
            <Route path="/create" component={AddExpensePage}></Route>
            <Route path="/edit" component={EditExpensePage}></Route>
            <Route path="/help" component={HelpPage}></Route>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

