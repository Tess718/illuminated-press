import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Components/Sidebar.jsx'

const ForgotPassword = () => {
  return (
    <div>
        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-0">
            <div className="basis-[30%]">
                <Sidebar />
            </div>
            <div className="basis-[70%] flex min-h-screen justify-center items-center">
                <div className="mx-auto flex gap-4 flex-col">
                    <h3 className='font-bold text-3xl'>Forgot Your Password?</h3>
                    <p className='font-normal text-sm text-[#737373]'>Enter your email, and we’ll send you a link to reset your <br /> password.</p>

                    <form action="" className='text-sm flex flex-col gap-4'>
                    
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="Email" className='font-medium'>Email</label>
                            <input type="email" name='Email' placeholder='Email' className='border border-[#E5E5E5] h-9 ps-2 rounded-lg outline-0 shadow-xs'  />
                        </div>


                        
                        <button className='h-9 bg-[#619746] rounded-md text-sm text-white font-medium '>Verify</button>

                        
                        <Link to="/Signin">
                            <button className='h-9 rounded-md border border-gray-50 font-medium text-sm flex justify-center items-center gap-2 w-full cursor-pointer shadow-xs'> Back to Login </button>
                        
                        </Link>

                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword