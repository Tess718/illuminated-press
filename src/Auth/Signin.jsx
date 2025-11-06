import React from 'react'
import Sidebar from '../Components/Sidebar.jsx'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row md:gap-0">
            <div className="basis-[30%]">
                <Sidebar />
            </div>
            <div className="basis-[70%] flex min-h-screen justify-center items-center gap-3">
                <div className="mx-auto flex gap-4 flex-col max-sm:px-5">
                    <img src="/logo.png" alt="" className='w-[140px] pb-10 md:hidden' />
                    <h3 className='font-bold text-3xl'>Sign in</h3>
                    <p className='font-normal text-sm text-[#737373]'>Log in to unlock tailored content and stay connected with <br /> your community.</p>

                    <form action="" className='text-sm flex flex-col gap-4'>
                    
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="Email" className='font-medium'>Email</label>
                            <input type="email" name='Email' placeholder='Email' className='border border-[#E5E5E5] h-9 ps-2 rounded-lg outline-0 shadow-xs'  />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <div className="flex justify-between">
                                <label htmlFor="Password" className='font-medium'>Password</label>

                                <Link to="/forgotPassword" className='ms-auto text-sm underline  font-normal text-[#737373]'>Forgot Password?</Link>
                            </div>
                            <input type="password" name='Password' placeholder='Password' className='border border-[#E5E5E5] h-9 ps-2 rounded-lg outline-0 shadow-xs'  />
                        </div>

                        
                        <button className='h-9 bg-[#619746] rounded-md text-sm text-white font-medium '>Sign in</button>

                        <div className="flex items-center">
                            <div className="grow h-px bg-gray-300"></div>
                            <span className="px-3 text-xs text-gray-500 font-normal">OR SIGN IN WITH</span>
                            <div className="grow h-px bg-gray-300"></div>
                        </div>

                        <button className='h-9 rounded-md border border-gray-50 font-medium text-sm flex justify-center items-center gap-2 shadow-xs'> <img src="google.png" alt="google" /> Sign in with Google</button>

                        <button className='h-9 rounded-md border border-gray-50 font-medium text-sm flex justify-center items-center gap-2 shadow-xs'> <img src="apple.png" alt="apple" /> Sign in with Apple</button>

                        <div className='flex justify-center gap-1'>
                            <p className='text-sm font-normal text-gray-400'>Don’t have an account?</p><Link to="/" className='underline text-sm text-black font-normal'>Sign up</Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin