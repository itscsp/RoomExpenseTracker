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
            
            <div className="grid grid-cols-6 my-[60px] gap-[50px] ">
                <div className="col-span-6 md:col-span-2 p-[20px] rounded-[20px] bg-gray">
                    <Form />
                </div>
                <div className="col-span-6 md:col-span-4 rounded-[20px] bg-gray">
                    
                    <ExpensesList  />
                </div>
            </div>
        </div>
    );
}

export default App