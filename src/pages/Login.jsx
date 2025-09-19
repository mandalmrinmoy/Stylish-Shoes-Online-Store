import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
    <div className='w-screen h-screen flex justify-center items-center bg-black/40'>
    <div className='w-[500px] h-[450px] bg-white rounded-lg flex flex-col justify-start items-center gap-5'>
      <p className='mt-8 mb-5 text-3xl text-gray-900'>Login</p>
      <form action="" className='flex flex-col'>
        <input type="text" name="username" placeholder='Username or Email Address*' className='w-100 h-12 border-1 border-gray-400 px-4 text-[17px]'/><br />
        <input type="password" name="password" placeholder='Password' className='w-100 h-12 border-1 border-gray-400 px-4 text-[17px]'/>
      </form>
      <div className='flex justify-around w-full text-gray-500 font-semibold'>
        <div className='flex gap-1.5'>
          <input type="checkbox" name="checkbox"/>
          <p>Remember Me</p>
        </div>
        <div><Link to="#">Forgot your password?</Link></div>
      </div>
      <div className='w-full px-12 text-gray-300 mt-10'>
          <hr/>
      </div>
      <div className='flex gap-5'>
        <button type='submit' className='w-15 h-9 bg-red-500 text-white font-semibold'>Login</button>
        <button type='submit' className='w-20 h-9 bg-white border-1 border-gray-300 text-gray-800 font-semibold'>Register</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Login