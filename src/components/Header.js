import React,{ useState, useRef, useEffect }  from 'react'

import { IoIosArrowDown } from 'react-icons/io'


const Header = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    console.log(currentMonth)

    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(months[currentMonth]);
    const ref = useRef(null);

    // Make dropdown functionable
    function handleOptionClick(optionValue) {
        setValue(optionValue);
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


      


      


    return (
        <div className='mt-[54px] flex justify-between align-center flex-wrap'>
            <h1 className='font-semibold  text-[24px] md:text-[48px]   text-black'>Room Expense Trcker</h1>

            <div className='self-center'>
                <div className="relative">
                    <button
                        className="flex justify-between align-center p-3 bg-white  w-[250px] border rounded py-[10px]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        
                        <span>{value}</span>
                        <IoIosArrowDown />
                    </button>
                    {isOpen && (
                        <div ref={ref} className="absolute left-0 bg-white rounded-lg" >
                            <ul className=" border border-t-0 w-[250px] rounded ">
                            {months.map((month, index) => (
                                <li key={index} className="px-4 py-3 hover:bg-gray" onClick={() => handleOptionClick(month)}>{month}</li>))}
                            </ul>
                        </div>
                    )}
                </div>

            </div>


        </div>
    )
}

export default Header