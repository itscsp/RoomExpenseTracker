import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Users = () => {

  const userId = uuidv4();

  const users = [
    {
      userid: 101,
      name: "Chethan S",
      placeholderImage: "https://via.placeholder.com/150",
      toPayAmount: 150,
      PaidAmount: 50,
      SharedAmount: 100
    },
    {
      userid: 102,
      name: "Sai Kiran",
      placeholderImage: "https://via.placeholder.com/150",
      toPayAmount: 200,
      PaidAmount: 100,
      SharedAmount: 100
    },
    {
      userid: 103,
      name: "Shobith N",
      placeholderImage: "https://via.placeholder.com/150",
      toPayAmount: 250,
      PaidAmount: 150,
      SharedAmount: 100
    },
    {
      userid: 104,
        name: "Lohith K",
        placeholderImage: "https://via.placeholder.com/150",
        toPayAmount: 200,
        PaidAmount: 100,
        SharedAmount: 100
      },
      {
        userid: 105,
        name: "Sunil",
        placeholderImage: "https://via.placeholder.com/150",
        toPayAmount: 250,
        PaidAmount: 150,
        SharedAmount: 100
      }
  ];


  return (
    <div>
      <div className='card-container grid grid-cols-5 gap-4'>
        {users.map((index, user) => (
          <div key={index} className="userCards col-span-1 bg-gray p-[10px] rounded-lg">
        
              <div className='flex justify-between flex-wrap align-center mb-[10px]'>
                <img className='rounded-full border-2 border-white' src="https://via.placeholder.com/45" alt={user.name} />
                <h4 className='self-center'>User Name</h4>
              </div> 
              <div className='bg-white flex justify-between flex-wrap align-center rounded-[3px] p-[2px] mb-[10px]'>
                <span className='w-[75px] text-center bg-gray py-[5px] px-[10px] rounded-[3px]'>Share</span>
                <span className='py-[5px] px-[10px]'>₹200</span>
              </div>
              <div className='bg-white flex justify-between flex-wrap align-center rounded-[3px] p-[2px] mb-[10px]'>
                <span className='w-[75px] text-center bg-gray py-[5px] px-[10px] rounded-[3px]'>Piad</span>
                <span className='py-[5px] px-[10px]'>₹200</span>
              </div>
              <div className='bg-white flex justify-between flex-wrap align-center rounded-[3px] p-[2px] mb-[10px]'>
                <span className='w-[75px] text-center  py-[5px] px-[10px] rounded-[3px]'>To Pay</span>
                <span className='py-[5px] px-[10px]'>₹200</span>
              </div>
            
          </div>
        ))}
      </div>


    </div>
  )
}

export default Users