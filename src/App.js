import React from "react";
import Header from './components/Header';
import Users from './components/Users'
import Form from './components/Form'
import ExpensesList from './components/ExpensesList'

import './app.css'; //added line

const App = () => {
    return (
        <div className="container m-auto">
            <Header />
            <Users />
            <Form />
            <ExpensesList />
        </div>
    );
}

export default App