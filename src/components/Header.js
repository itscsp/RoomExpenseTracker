import React,{useState} from 'react'

import { IoIosArrowDown } from 'react-icons/Io'


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('December');

    // Make dropdown functionable
    function handleOptionClick(optionValue) {
        setValue(optionValue);
        setIsOpen(false);
      }
      


    return (
        <div className='mt-[54px] flex justify-between align-center'>
            <h1 className='font-semibold  text-[48px] text-black'>Room Expense Trcker</h1>

            <div className='self-center'>
                <div className="relative">
                    <button
                        className="flex justify-between align-center p-3 bg-white w-[250px] border rounded py-[10px]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        
                        <span>{value}</span>
                        <IoIosArrowDown />
                    </button>
                    {isOpen && (
                        <div className="absolute left-0 bg-white rounded-lg">
                            <ul className="py-2">
                                <li className="px-4 py-2" onClick={() => handleOptionClick(value)}>{value}</li>
                                <li className="px-4 py-2" onClick={() => handleOptionClick('Option 2')}>Option 2</li>
                                <li className="px-4 py-2" onClick={() => handleOptionClick('Option 3')}>Option 3</li>
                            </ul>
                        </div>
                    )}
                </div>

            </div>


        </div>
    )
}

export default Header