import React, { useState } from 'react';

const ExpenseForm = () => {
    const [expense, setExpense] = useState({
        date: '',
        description: '',
        amount: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        if (expense.description.length > 99) {
            errors.description = 'Description should be less than 100 characters'
        }else {
            errors.description = ''
        }
        setExpense({ ...expense, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let errors = {};

        if (!expense.date) {
            errors.date = 'Please enter a date';
        } else {
            const selectedDate = new Date(expense.date);
            const currentDate = new Date();

            // To check date is not from past
            if (selectedDate < new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1) || selectedDate < new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)) {
                errors.date = "Date can't be from the past";
            }

        }

        if (!expense.description) {
            errors.description = 'Please enter a description';
        } else if (expense.description.length > 100) {
            errors.description = 'Description should be less than 100 characters'
        }

        if (!expense.amount) {
            errors.amount = 'Please enter an amount';
        }

        setErrors(errors);
        
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Expense added:', expense);
            // make API call or add expense to state here
        }
    };

    return (
        <form className='flex flex-col justify-stretch gap-[20px]' onSubmit={handleSubmit}>
            <div>

                <input
                    type="date"
                    name="date"
                    placeholder='Date'
                    value={expense.date}
                    onChange={handleChange}
                    className="w-full focus:outline-none py-[6px] px-[20px] text-[18px] rounded-[5px] leading-[40px]"
                   
                />
                {errors.date && <p className='px-[5px] text-[12px] text-red-600'>{errors.date}</p>}
            </div>
            <div>
                <div className='bg-white rounded-[5px]'>
                    <textarea
                        type="text"
                        name="description"
                        value={expense.description}
                        onChange={handleChange}
                        className="w-full focus:outline-none py-[6px] px-[20px] text-[18px] rounded-[5px] h-[80px] w-max-[100px]"
                    placeholder='Expense Description'

                    ></textarea>
                    <p className=' px-[5px] text-[#777] text-end w-full'>{expense.description.length}/100</p>
                </div>
                {errors.description && <p className='px-[5px] text-[12px] text-red-600'>{errors.description}</p>}
            </div>
            <div>
                
                <input
                    type="number"
                    name="amount"
                    value={expense.amount}
                    onChange={handleChange}
                    className="w-full focus:outline-none py-[6px] px-[20px] text-[18px] rounded-[5px] leading-[40px]"
                    placeholder='Amount'

                />
                {errors.amount && <p className='px-[5px] Atext-[12px] text-red-600'>{errors.amount}</p>}
            </div>
            <button className='bg-black text-white py-[6px] px-[20px] text-[18px] rounded-[5px] leading-[40px]' type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
