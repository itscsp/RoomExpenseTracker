import React, { useState } from 'react';
import Footer from './Footer';

function LoginScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = {};

        if (!email) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = 'Email address is invalid';
        }

        if (!password) {
            formErrors.password = 'Password is required';
          
        } else if (password.length < 8) {
            formErrors.password = 'Password must be at least 8 characters long';
        } 

        console.log(Object.keys(formErrors).length )
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        } else{
            props.onLogin(email, password);
        }
        
 
        

    }

    return (
        <div className="grid w-full h-[100vh] place-content-center">



            <div className=" bg-white rounded-lg m-4 p-[25px] shadow-xl">

                <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
                    <h1 className='text-center font-semibold text-[24px] md:text-[42px]   text-black'>Expenses Tracker</h1>
                    <p> <small>Username: test@gmail.com</small></br><small>Pass: 123456789</small> </p>
                    <h3 className='text-center font-semibold   md:text-[18px]  text-black'>Login</h3>
                    <div>

                        <input
                            type="email"
                            value={email}
                            placeholder="Email"
                            onChange={e => setEmail(e.target.value)}
                            className="w-full p-3 bg-white  placeholder:text-black md:text-center border rounded py-[10px]"
                        />
                        {errors.email && <p className="text-[12px] text-red-600">{errors.email}</p>}
                    </div>
                    <div>

                        <input
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                            className="w-full p-3 bg-white  placeholder:text-black md:text-center border rounded py-[10px]"
                        />
                        {errors.password && <p className="text-[12px] text-red-600">{errors.password}</p>}
                    </div>

                    <button
                        type="submit"
                        className="bg-black text-white px-3 py-[10px] rounded-lg hover:bg-black-600"
                    >
                        Login
                    </button>
                </form>
    
                <Footer/>
            </div>


        </div>
    );
}

export default LoginScreen;
