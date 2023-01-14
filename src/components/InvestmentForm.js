import React, { useState, useRef, useEffect } from 'react'

import { IoIosArrowDown } from 'react-icons/io'

const InvestmentForm = () => {
    const userOptions = ["Chethan S", "Sai Kiran", "Shobith N", 'Lohith K','Sunil' ];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState('');
    const [amount, setAmount] = useState('');
    const ref = useRef(null);
    const [errors, setErrors] = useState({});

    // Make dropdown functionable
    function handleOptionClick(optionValue) {
        setSelectedUser(optionValue);
        setIsOpen(false);
    }


    // Check if user click outside
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    //   check if user click outside every time mouse down happend
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleChange = e => {
        if(e.target.value){
            setAmount(e.target.value)
        }
    }


    const handleSubmit = e => {
        e.preventDefault();

        let errors = {};

        if(!selectedUser) {
            errors.selectedUser = 'Please selecct user from option';
        }

        if(!amount) {
            errors.amount = 'Please enter an amount'
        }

        setErrors(errors);

        if(selectedUser && amount) {
            console.log('Investment:', selectedUser, amount);
        }

        return Object.keys(errors).length === 0;
    }





    return (

        <div className="flex flex-col justify-stretch gap-[20px] h-[325px]">
            <div className="relative">
                <button
                    className="flex justify-between items-center w-full bg-white focus:outline-none py-[6px] px-[20px] text-[18px] rounded-[5px] leading-[40px]"
                    onClick={() => setIsOpen(!isOpen)}
                >

                    <span className={selectedUser ? 'text-black' : 'text-[#575757]'} >{selectedUser ? selectedUser : 'Select user'}</span>
                    <IoIosArrowDown />
                </button>
                {isOpen && (
                    <div ref={ref} className="absolute w-full left-0 bg-white rounded-lg" >
                        <ul className="border-t-0 w-full rounded-b rounded-t-0 ">
                            {userOptions.map((user, index) => (
                                <li key={index} className="px-4 py-3 hover:bg-gray" onClick={() => handleOptionClick(user)}>{user}</li>))}
                        </ul>
                    </div>
                )}
                {errors.selectedUser && <p className='px-[5px] text-[12px] text-red-600'>Please select user</p>}

            </div>

            <div className=''>
                <input
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={handleChange}
                    className="w-full focus:outline-none py-[6px] px-[20px] text-[18px] rounded-[5px] leading-[40px]"
                    placeholder='Amount'

                />
                {errors.amount && <p className='px-[5px] text-[12px] text-red-600'>Please enter an amount</p>}
            </div>
            <button className='bg-black text-white py-[6px] px-[20px] text-[18px] rounded-[5px] leading-[40px]' onClick={ handleSubmit } >Add Investment</button>
        </div>
    )
}


export default InvestmentForm