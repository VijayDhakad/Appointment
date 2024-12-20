import React, { useState } from 'react'
import{assets} from '../assets/assets'

const MyProfile = () => {
  const [userData, setUserData]=useState({
    name:"Edward Vincent",
    image:assets.profile_pic,
    email:'dhakadvijay2684@gmail.com',
    Phone:'+91 8462052684',
    address:{
      line1:'gurgaon',
      line2:'gwalior'
    },
    gender:'Male',
    dob:'2001-07-04'
  })
  const[isEdit,setIsEdit]=useState(false)

  return (
    <div className='mx-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={userData.image} alt="" />
      {
        isEdit ?
        <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' value={userData.name} type="text" onChange={e=>setUserData(prev=>({...prev,name:e.target.value}))}/>
        : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none '/>
      <div>
        <p className='text-neutral-500 underline mt-3 '>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email Id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
        isEdit ?
        <input className='bg-gray-100 mx-w-52' value={userData.Phone} type="text" onChange={(e)=>setUserData(prev=>({...prev,Phone:e.target.value}))}/>
        : <p className='text-blue-500'>{userData.Phone}</p>
      }
      <p className='font-medium'>Address :</p>
      {
        isEdit
        ? <p >
          <input className='bg-gray-50' onChange={(e)=>setUserData(prev=> ({...prev,address:{...prev.address,line1:e.target.value}}))} value={userData.address.line1} type="text" />
          <br />
          <input className='bg-gray-50' onChange={(e)=>setUserData(prev=> ({...prev,address:{...prev.address,line2:e.target.value}}))} value={userData.address.line2} type="text" />
        </p>
        :<p className='bg-gray-50'>
          {userData.address.line1}
          <br />
          {userData.address.line2}
        </p>
      }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 '>
          <p className='font-medium'>Gender:</p>
          {
        isEdit ?
        <select className='max-w-20 bg-gray-100' onChange={(e)=>setUserData(prev=>({...prev,gender:e.target.value}))} value={userData.gender} >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        : <p className='text-gray-400'>{userData.gender}</p>
      }
      <p className='font-medium'>Birthday:</p>
      {
        isEdit ?
        <input className='max-w-28 bg-gray-100' value={userData.dob} type="date" onChange={(e)=>setUserData(prev=>({...prev,dob:e.target.value}))}/>
        : <p className='text-gray-400'>{userData.dob}</p>
      }
        </div>
      </div>
      <div className='mt-10'>
        {
          isEdit
          ? <button className='border border-primary px-8 py-2 rounded-full hover:text-white transition-all hover:bg-primary' onClick={()=>setIsEdit(false)}>Save Information </button>
          : <button className='border border-primary px-8 py-2 rounded-full hover:text-white transition-all hover:bg-primary' onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile
