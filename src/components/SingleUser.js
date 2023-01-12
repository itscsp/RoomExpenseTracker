import React from 'react'

const SingleUser = ({user}) => {
    return (
        <div  className="userCards col-span-1 bg-gray px-[10px] pt-[10px] pb-[5px] rounded-[13px]">

            <div className='flex justify-between flex-wrap align-center mb-[10px]'>
                <img className='rounded-full border-2 border-white' src="https://via.placeholder.com/45" alt={user.name} />
                <h4 className='self-center'>{user.name}</h4>
            </div>
            <div className='bg-white flex justify-between flex-wrap align-center rounded-[3px] p-[2px] mb-[10px]'>
                <span className='w-[75px] text-center bg-gray py-[3px] px-[10px] rounded-[3px]'>Share</span>
                <span className='py-[3px] px-[10px]'>₹200</span>
            </div>
            <div className='bg-white flex justify-between flex-wrap align-center rounded-[3px] p-[2px] mb-[10px]'>
                <span className='w-[75px] text-center bg-gray py-[3px] px-[10px] rounded-[3px]'>Paid</span>
                <span className='py-[3px] px-[10px]'>₹200</span>
            </div>
            <div className='bg-white flex justify-between flex-wrap align-center rounded-[3px] p-[2px]'>
                <span className='w-[75px] text-center  py-[3px] px-[10px] rounded-[3px]'>To Pay</span>
                <span className='py-[3px] px-[10px]'>₹200</span>
            </div>

        </div>
    )
}

export default SingleUser