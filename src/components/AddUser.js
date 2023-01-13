import React, { useState } from 'react';

const AddUser = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {

        console.log(userName.length);
        e.preventDefault();
        let formErrors = {};

        if (!userName) {
            formErrors.userName = 'User Name is required';
        } else if (userName.length > 3 && userName < 10) {
            formErrors.userName = 'User Name Minmum Lenth of 3 and maximum length of 8';
        }

        if (!email) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = 'Email address is invalid';
        }

        if (!password) {
            formErrors.password = 'Password is required';
        } else if (password.length < 8) {
            formErrors.password = 'Password must be at least 8 characters long';
        } else {
            formErrors.password = '';
        }

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        // Form is valid, submit data to server
    }

    return (
        <form className='mt-[15px] grid grid-cols-1 md:grid-cols-4 gap-4 align-start'>
            <div className='coll-span-1 '>
                <input
                    type="text"
                    placeholder="Enter user name"
                    name="name"
                    className='p-3 bg-white w-full placeholder:text-black md:text-center border rounded py-[10px]'
                    id="name" 
                    value={userName} 
                    onChange={e => setUserName(e.target.value)} 
                />
                {errors.userName && <p className="text-[12px] text-red-600">{errors.userName}</p>}
                </div>
            <div className='col-span-1'>
                <input
                    type="email"
                    placeholder="Enter user email"
                    name="email"
                    className='p-3 bg-white w-full placeholder:text-black md:text-center  border rounded py-[10px]'
                    id="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-[12px] text-red-600">{errors.email}</p>}
                
            </div>
            <div className='coll-span-1'>
                <input
                    type="password"
                    placeholder="Enter user password"
                    name="password"
                    className='p-3 bg-white w-full placeholder:text-black md:text-center border rounded py-[10px]'
                    id="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                />
                {errors.password && <p className="text-[12px] text-red-600">{errors.password}</p>}
                </div>
                <div className='col-span-1'>
                <button onClick={handleSubmit} className='w-full p-3 bg-black rounded-lg text-white cursor-pointer' type="submit">Add User</button>

                </div>
        </form>
    )
}

export default AddUser


