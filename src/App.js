import React, { useState }  from "react";
import Header from './components/Header';
import Users from './components/Users'
import Form from './components/Form'
import ExpensesList from './components/ExpensesList'
import Login from './components/Login'


import './app.css'; //added line
import Footer from "./components/Footer";

const App = () => {
    const [isLoged, setIsLoged] = useState(false);

    const [loginResult, setLoginResult] = useState(null);

    const handleLogin = (email, password) => {
      // code to handle login (e.g. sending a request to a server)
      setLoginResult({ email, password });
      setIsLoged(true);
    };

    return (
        <>
             {!isLoged ? 
             <Login onLogin={handleLogin} /> 
             : 
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
                    <Footer />
            </div>

             }
            
        </>
    );
}

export default App