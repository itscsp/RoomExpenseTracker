import React, { useState } from 'react';

const AddUser = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [formErrors, setFormErrors] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form before submitting
        let hasError = false;
        if (!formData.username) {
            setFormErrors({ ...formErrors, username: 'Username is required.' });
            hasError = true;
        }else{
            if (formData.username.length < 3) {
                setFormErrors({...formErrors, username: 'Username must be at least 3 characters long.'});
                hasError = true;
              }
              if (formData.username.length > 30) {
                setFormErrors({...formErrors, username: 'Username must be less than 30 characters long.'});
                hasError = true;
              }
        }
        if (!formData.email) {
            setFormErrors({ ...formErrors, email: 'Email is required.' });
            hasError = true;
        }else{
             // Regular expression to check email validation
        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
            setFormErrors({ ...formErrors, email: 'Email is invalid' });
            hasError = true;
        }

        }
        if (!formData.password) {
            setFormErrors({ ...formErrors, password: 'Password is required.' });
            hasError = true;
        } else{
            if (formData.password.length > 8 || formData.password.length < 12) {
                setFormErrors({...formErrors, password: 'Password must be at least 8 characters long.'});
                hasError = true;
              }
        }
       
        // ... existing validation code ...

 

 

        // check for errors and prevent form submission
        if (hasError) return;
        // form is valid, submit it
        // make an api call to create user
        // clear the form
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: '' });
    };

    return (
        <form className='mt-[15px] grid grid-cols-4 gap-[53px]'>
            <div>

                <input
                    type="text"
                    placeholder="Enter your username"
                    name="username"
                    className='p-3 bg-white placeholder:text-black text-center  border rounded py-[10px]'
                    value={formData.username}
                    onChange={handleInputChange}
                />
                {formErrors.username && <p className="error text-[12px] text-red-600 ">{formErrors.username}</p>}
            </div>
            <div>
                <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className='p-3 bg-white placeholder:text-black text-center  border rounded py-[10px]'
                    value={formData.email}
                    onChange={handleInputChange}
                />
                {formErrors.email && <p className="error text-[12px] text-red-600 ">{formErrors.email}</p>}
            </div>
            <div>

                <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    className='p-3 bg-white placeholder:text-black text-center border rounded py-[10px]'
                    value={formData.password}
                    onChange={handleInputChange}
                />
                {formErrors.password && <p className="error text-[12px] text-red-600 ">{formErrors.password}</p>}
            </div>
            <button onClick={handleSubmit} className='bg-black rounded-lg text-white cursor-pointer' type="submit">Add User</button>
        </form>
    )
}

export default AddUser


