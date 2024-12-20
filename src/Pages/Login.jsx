import React, { useState } from 'react'

const Login = () => {
  const [state,setState]=useState('Sign Up')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[name,setname]=useState('')

  const onSubmitHandler=async(event)=>{
   event.preventDefault()
  }
  return (
    <form className='min-h-[80vh] flex items-center '>
      <div className='flex flex-col gap-3 m-auto items-start p-8 sm:min-96 border border-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold '>{state==='Sign Up'?"Create Account":"Login"}</p>
        <p>Please {state==='Sign Up'?"Sign Up":"log In"} to book appointment</p>

        {
          state==='Sign Up'&&
          <div className='w-full'>
          <p>Full Name</p>
          <input className='border border-zinc-200 w-full p-2 mt-1' type="text" onChange={(e)=>setname(e.target.name)} value={name} placeholder='' required/>
        </div>
        }
        
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-200 w-full p-2 mt-1' type="email" onChange={(e)=>setEmail(e.target.email)} value={email} placeholder=''required />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-200 w-full p-2 mt-1' type="password" onChange={(e)=>setPassword(e.target.password)} value={password} placeholder='' required/>
        </div>

        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state==='Sign Up'?"Create Account":"Login"}</button>
        {state==='Sign Up'? <p>Already have an account? <span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer'>Login here</span> </p>:<p>Create an new account? <span onClick={()=>setState('Sign Up')}className='text-primary underline cursor-pointer'>click here</span>  </p>
        }
      </div>
    </form>
  )
}

export default Login
