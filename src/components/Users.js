import React from 'react'
import AddUser from './AddUser';


const Users = () => {



  const users = [
    {
      userid: 101,
      name: "Chethan S",
      placeholderImage: "/images/placeholder.png",
      toPayAmount: 150,
      PaidAmount: 50,
      SharedAmount: 100
    },
    {
      userid: 102,
      name: "Sai Kiran",
      placeholderImage: "/images/placeholder.png",
      toPayAmount: 200,
      PaidAmount: 100,
      SharedAmount: 100
    },
    {
      userid: 103,
      name: "Shobith N",
      placeholderImage: "/images/placeholder.png",
      toPayAmount: 250,
      PaidAmount: 150,
      SharedAmount: 100
    },
    {
      userid: 104,
      name: "Lohith K",
      placeholderImage: "/images/placeholder.png",
      toPayAmount: 200,
      PaidAmount: 100,
      SharedAmount: 100
    },
    {
      userid: 105,
      name: "Sunil",
      placeholderImage: "/images/placeholder.png",
      toPayAmount: 250,
      PaidAmount: 150,
      SharedAmount: 100
    }
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2
  };


  return (
    <div className='pt-[49px]'>
      
      {/* Users Cards */}
      <div className='card-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {users.map((user, index) => (

          <div key={index} className="userCards width-full font-semibold  col-span-1 bg-gray p-[10px] rounded-lg">

            <div className='flex justify-start flex-wrap align-center mb-[10px] gap-[10px] text-[20px]'>
              <img className='rounded-full border-2 border-white' src={user.placeholderImage} alt={user.name} />
              <h4 className='self-center'>{user.name}</h4>
            </div>
            <div className='bg-white flex justify-between flex-wrap align-center rounded-[3px] p-[2px] mb-[10px]'>
              <span className='w-[75px] text-center bg-gray py-[5px] px-[10px] rounded-[3px]'>Share</span>
              <span className='py-[5px] px-[10px]'>₹{user.SharedAmount}</span>
            </div>
            <div className='bg-white flex justify-between flex-wrap align-center rounded-[3px] p-[2px] mb-[10px]'>
              <span className='w-[75px] text-center bg-gray py-[5px] px-[10px] rounded-[3px]'>Paid</span>
              <span className='py-[5px] px-[10px]'>₹{user.PaidAmount}</span>
            </div>
            <div className='bg-white flex justify-between flex-wrap align-center rounded-[3px] p-[2px] mb-[10px]'>
              <span className='w-[75px] text-center  py-[5px] px-[10px] rounded-[3px]'>To Pay</span>
              <span className='py-[5px] px-[10px]'>₹{user.toPayAmount}</span>
            </div>

          </div>
        ))}


      </div>

      {/* Add User Form */}
      <AddUser />
    </div>
  )
}

export default Users