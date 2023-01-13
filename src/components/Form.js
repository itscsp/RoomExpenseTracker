import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm';
import InvestmentForm from './InvestmentForm';

const Form = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index)
  }
  return (
    <>
      {/* Tab Buttons */}
      <div className='flex justify-between gap-[20px] mb-[50px]'>

        <button   className={[activeTab == 0 ? 'border-b-[3px] ' : '',''].join('text-center w-full bg-white py-[15px] rounded-[5px]')} onClick={() => handleTabClick(0)}>Expense</button>
        <button className={[activeTab == 1 ? 'border-b-[3px] ' : '',''].join('text-center w-full bg-white py-[15px] rounded-[5px]')} onClick={() => handleTabClick(1)}>Investment</button>
      </div>

      {/* Tab Content For Expenses Form */}

      {activeTab == 0 && <ExpenseForm />}

      {/* Tab Content For Investment Form */}

      {activeTab == 1 && <InvestmentForm />}

    </>
  )
}

export default Form