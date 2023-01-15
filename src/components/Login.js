import React, { useState } from 'react';

function LoginScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [validate, setValidate] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = {};

        if (!email) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = 'Email address is invalid';
            setValidate(true);

        }else{
            setValidate(true);
        }

        if (!password) {
            formErrors.password = 'Password is required';
            setValidate(false);
        } else if (password.length < 8) {
            formErrors.password = 'Password must be at least 8 characters long';
            setValidate(false);
        } else {
            formErrors.password = '';
            setValidate(true);
        }

        if(validate) {
            props.onLogin(email, password);
        }
        
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        } 
        
 
        




    }

    return (
        <div className="grid w-full h-[100vh] place-content-center">



            <div className=" bg-white rounded-lg m-4 p-[25px] shadow-xl">

                <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
                    <h1 className='text-center font-semibold text-[42px]   text-black'>Expenses Tracker</h1>
                    <h3 className='text-center font-semibold   md:text-[24px]  text-black'>Login</h3>
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
            </div>


        </div>
    );
}

export default LoginScreen;
