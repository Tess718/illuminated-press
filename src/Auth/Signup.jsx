import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='overflow-x-hidden'>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0">
            <div className="basis-[30%]">
                <Sidebar />
            </div>
            <div className="basis-[70%] lg:h-[120dvh] max-sm:w-screen md:h-screen flex justify-center items-center max-sm:pb-10">
                <div className="flex mx-auto flex-col gap-3 max-sm:px-5">
                    <h3 className='font-bold text-3xl'>Create Your Account</h3>
                    <p className='font-normal text-sm text-[#737373]'>Start personalizing your AI-powered newsletters today it <br /> only takes a minute</p>

                    <form action="" className='text-sm flex flex-col gap-3'>
                        <div className="flex flex-col md:flex-row justify-center gap-5">
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="FirstName" className='font-medium'>First Name</label>
                                <input type="text" name='FirstName' placeholder='First Name' className='border border-[#E5E5E5] h-9 ps-2 rounded-lg outline-0 shadow-xs' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="LastName" className='font-medium'>Last Name</label>
                                <input type="text" name='LastName' placeholder='Last Name' className='border border-[#E5E5E5] h-9 ps-2 rounded-lg outline-0 shadow-xs'  />
                            </div>
                        </div>
                        
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="Email" className='font-medium'>Email</label>
                            <input type="email" name='Email' placeholder='Email' className='border border-[#E5E5E5] h-9 ps-2 rounded-lg outline-0 shadow-xs'  />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor="Password" className='font-medium'>Password</label>
                            <input type="password" name='Password' placeholder='Password' className='border border-[#E5E5E5] h-9 ps-2 rounded-lg outline-0 shadow-xs'  />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor="ConfirmPassword" className='font-medium'>Confirm Password</label>
                            <input type="Password" name='ConfirmPassword' placeholder='Confirm Password ' className='border border-[#E5E5E5] h-9 ps-2 rounded-lg outline-0 shadow-xs'  />
                        </div>

                        <div className="flex gap-3">
                            <input type="checkbox" name="terms_and_conditions" id="" className='accent-[#619746]' />

                            <label htmlFor="terms_and_conditions" className='font-medium'>I agree to the Terms & Conditions</label>
                        </div>
                        
                        <button className='h-9 bg-[#619746] rounded-md text-sm text-white font-medium '>Sign up</button>

                        <div className="flex items-center">
                            <div className="grow h-px bg-gray-300"></div>
                            <span className="px-3 text-xs text-gray-500 font-normal">OR SIGN UP WITH</span>
                            <div className="grow h-px bg-gray-300"></div>
                        </div>

                        <button className='h-9 rounded-md border border-gray-50 font-medium text-sm flex justify-center items-center shadow-xs gap-2'> <img src="google.png" alt="google" /> Sign up with Google</button>

                        <button className='h-9 rounded-md border border-gray-50 font-medium text-sm flex justify-center items-center shadow-xs gap-2'> <img src="apple.png" alt="apple" /> Sign up with Apple</button>

                        <div className='flex justify-center gap-1'>
                            <p className='text-sm font-normal text-gray-400'>Already have an account?</p><Link to="/Signin" className='underline text-sm text-black font-normal'>Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup