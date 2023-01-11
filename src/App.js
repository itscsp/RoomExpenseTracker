import React from "react";
import Header from './components/Header';
import Users from './components/Users'
import Form from './components/Form'
import ExpensesList from './components/ExpensesList'

import './app.css'; //added line

const App = () => {
    return (
        <div className="container m-auto px-[10px]">
            <Header />
            <Users />
            
            <div className="grid grid-cols-6">
                <div className="col-span-2">
                    <Form />
                </div>
                <div className="col-span-4">
                    
                    <ExpensesList  />
                </div>
            </div>
        </div>
    );
}

export default App