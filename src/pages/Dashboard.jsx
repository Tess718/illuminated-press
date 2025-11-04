import React from 'react'
import DashSidebar from '../Components/DashSidebar'
import { Search, Settings2, ListOrdered } from 'lucide-react'

const Dashboard = () => {
  return (
    <div>
        <div className="flex justify-end">
          <DashSidebar />
          
          <div className='basis-[80%] p-5'>
            <div className="flex justify-between items-center">
              <div className="relative w-fit">
              <input 
                type="search" 
                placeholder='Search' 
                className='shadow-[0px_0px_0px_1px_#E5E5E5,0px_4px_8px_-5px_#00000026] rounded-md h-9 px-3 pl-7 text-[#737373] font-medium text-sm' 
              />
              <Search size={14} className='absolute left-2 top-1/2 -translate-y-1/2 text-[#737373]' />
              </div>

              <div className='flex gap-4 items-center'>
                <div className="h-10 w-10 rounded-full grid shadow-[0_0_0_1px_#E5E5E5,0_4px_8px_-5px_#00000026] place-content-center">
                  <i className="bi bi-bell text-[#0A0A0A]"></i>
                </div>

                <div className="h-10 w-10 rounded-full grid shadow-[0_0_0_1px_#E5E5E5,0_4px_8px_-5px_#00000026] place-content-center">
                  <i className="bi bi-question-circle"></i>
                </div>

                <div className='w-0 h-7 border border-[#E5E5E5]'/>

                <img src="/userimg.png" alt="" className='w-8 h-8 rounded-full object-cover ms-4' />

                <div>
                 <h5 className='font-medium text-[16px] leading-[150%] tracking-[0.02em] text-[#0A0A0A]'>Kristin Watson</h5>
                  <p className='font-normal text-[12px] leading-[150%] tracking-[0.02em] align-middle text-[#737373]'>Personal Account</p>
                </div>
              </div>


            </div>

            <div className="grid grid-cols-3 gap-4 py-8">
              <div className='border border-[#E8E8E9] rounded-xl p-2'>
                <div className='flex justify-between p-2'>
                  <h5 className='font-medium text-black text-lg'>Newsletters Generated</h5>

                  <div className='w-9 h-9 grid place-content-center border border-[#E8E8E9] rounded-lg shadow-[0_1px_1.5px_0.1px_#16192408]'>
                    <i className="bi bi-three-dots-vertical"></i>
                  </div>
                </div>

                <div className="flex justify-between items-center px-2">
                  <h3 className='text-[32px] font-semibold'>18200</h3>

                  <div>
                    <p className='text-[#5A5C66] font-normal text-sm'>
                    <span className='text-[#619746] font-semibold'><i className="bi bi-arrow-down-circle-fill"></i> 5.75% </span>vs last month
                    </p>
                  </div>
                </div>

                <div className="flex rounded-lg justify-between items-end border border-[#E8E8E9] mt-1.5 bg-[#F9F9FA] p-3">
                  <div className="flex flex-col">
                    <img src="/Chart.png" alt="chart" className='w-9' />

                    <p className='font-normal text-[12px] leading-[150%] tracking-[0em] text-center align-middle text-[#5A5C66]'>Jul</p>
                  </div>
                  <div className="flex flex-col">
                    <img src="/Chart (1).png" alt="chart" className='w-9' />

                    <p className='font-normal text-[12px] leading-[150%] tracking-[0em] text-center align-middle text-[#5A5C66]'>Aug</p>
                  </div>
                  <div className="flex flex-col">
                    <img src="/Chart (2).png" alt="chart" className='w-9' />

                    <p className='font-normal text-[12px] leading-[150%] tracking-[0em] text-center align-middle text-[#5A5C66]'>Sep</p>
                  </div>
                  <div className="flex flex-col">
                    <img src="/Chart (3).png" alt="chart" className='w-9' />

                    <p className='font-normal text-[12px] leading-[150%] tracking-[0em] text-center align-middle text-[#5A5C66]'>Oct</p>
                  </div>
                  <div className="flex flex-col">
                    <img src="/Chart (4).png" alt="chart" className='w-9' />

                    <p className='font-normal text-[12px] leading-[150%] tracking-[0em] text-center align-middle text-[#5A5C66]'>Nov</p>
                  </div>
                  <div className="flex flex-col">
                    <img src="/Chart (5).png" alt="chart" className='w-9' />

                    <p className='font-normal text-[12px] leading-[150%] tracking-[0em] text-center align-middle text-[#5A5C66]'>Dec</p>
                  </div>
                </div>

              </div>
              <div className='border border-[#E8E8E9] rounded-xl p-2'>
                <div className='flex justify-between p-2'>
                  <h5 className='font-medium text-black text-lg'>Active Templates</h5>

                  <div className='w-9 h-9 grid place-content-center border border-[#E8E8E9] rounded-lg shadow-[0_1px_1.5px_0.1px_#16192408]'>
                    <i className="bi bi-three-dots-vertical"></i>
                  </div>
                </div>

                <div className="flex justify-between items-center px-2">
                  <h3 className='text-[32px] font-semibold'>07</h3>

                  <div>
                    <p className='text-[#5A5C66] font-normal text-sm'>
                    <span className='text-[#619746] font-semibold'><i className="bi bi-arrow-up-circle-fill"></i> 10.2% </span>vs last month
                    </p>
                  </div>
                </div>

                <div className="flex rounded-lg justify-between items-end border border-[#E8E8E9] mt-1.5 bg-[#F9F9FA] p-3">
                  <div className="flex flex-col">
                    <img src="/Chart.png" alt="chart" className='w-9' />

                    <p className='font-normal text-[12px] leading-[150%] tracking-[0em] text-center align-middle text-[#5A5C66]'>Jul</p>
                  </div>
                  <div className="flex flex-col">
                    <img src="/Chart (1).png" alt="chart" className='w-9' />

                    <p className='font-normal text-[12px] leading-[150%] tracking-[0em] text-center align-middle text-[#5A5C66]'>Aug</p>
                  </div>
                  <div className="flex flex-col">
                    <img src="/Chart (2).png" alt="chart" className='w-9' />

                    <p className='font-normal text-[12px] leading-[150%] tracking-[0em] text-center align-middle text-[#5A5C66]'>Sep</p>
                  </div>
                  <div className="flex flex-col">
                    <img src="/Chart (3).png" alt="chart" className='w-9' />

                    <p className='font-normal text-[12px] leading-[150%] tracking-[0em] text-center align-middle text-[#5A5C66]'>Oct</p>
                  </div>
                  <div className="flex flex-col">
                    <img src="/Chart (4).png" alt="chart" className='w-9' />

                    <p className='font-normal text-[12px] leading-[150%] tracking-[0em] text-center align-middle text-[#5A5C66]'>Nov</p>
                  </div>
                  <div className="flex flex-col">
                    <img src="/Chart (5).png" alt="chart" className='w-9' />

                    <p className='font-normal text-[12px] leading-[150%] tracking-[0em] text-center align-middle text-[#5A5C66]'>Dec</p>
                  </div>
                </div>

              </div>
              <div className='border border-[#E8E8E9] rounded-xl p-2'>
                <div className='flex justify-between p-2'>
                  <h5 className='font-medium text-black text-lg'>Characters Used</h5>

                  <div className='w-9 h-9 grid place-content-center border border-[#E8E8E9] rounded-lg shadow-[0_1px_1.5px_0.1px_#16192408]'>
                    <i className="bi bi-three-dots-vertical"></i>
                  </div>
                </div>

                <div className="flex justify-between items-center px-2">
                  <h3 className='text-[32px] font-semibold'>05</h3>

                  <div>
                    <p className='text-[#5A5C66] font-normal text-sm'>
                    <span className='text-[#619746] font-semibold'><i className="bi bi-arrow-up-circle-fill"></i> 8.55% </span>vs last month
                    </p>
                  </div>
                </div>

                <div className="flex rounded-lg justify-between items-end border border-[#E8E8E9] mt-1.5 bg-[#F9F9FA] p-3">
                  <div className="flex flex-col">
                    <img src="/Chart.png" alt="chart" className='w-9' />

                    <p className='font-normal text-[12px] leading-[150%] tracking-[0em] text-center align-middle text-[#5A5C66]'>Jul</p>
                  </div>
                  <div className="flex flex-col">
                    <img src="/Chart (1).png" alt="chart" className='w-9' />

                    <p className='font-normal text-[12px] leading-[150%] tracking-[0em] text-center align-middle text-[#5A5C66]'>Aug</p>
                  </div>
                  <div className="flex flex-col">
                    <img src="/Chart (2).png" alt="chart" className='w-9' />

                    <p className='font-normal text-[12px] leading-[150%] tracking-[0em] text-center align-middle text-[#5A5C66]'>Sep</p>
                  </div>
                  <div className="flex flex-col">
                    <img src="/Chart (3).png" alt="chart" className='w-9' />

                    <p className='font-normal text-[12px] leading-[150%] tracking-[0em] text-center align-middle text-[#5A5C66]'>Oct</p>
                  </div>
                  <div className="flex flex-col">
                    <img src="/Chart (4).png" alt="chart" className='w-9' />

                    <p className='font-normal text-[12px] leading-[150%] tracking-[0em] text-center align-middle text-[#5A5C66]'>Nov</p>
                  </div>
                  <div className="flex flex-col">
                    <img src="/Chart (5).png" alt="chart" className='w-9' />

                    <p className='font-normal text-[12px] leading-[150%] tracking-[0em] text-center align-middle text-[#5A5C66]'>Dec</p>
                  </div>
                </div>

              </div>
            </div>

            <div className='py-2.5 px-4 border border-[#E8E8E9] rounded-2xl'>
              <div className="flex justify-between items-center">
                <h5 className='font-medium text-[18px] leading-[150%] tracking-[0em] text-center text-[#161924]'>Newsletters</h5>

              <div className='flex gap-3 items-center'>
                 <div className="relative w-fit">
                  <input 
                    type="search" 
                    placeholder='Search data' 
                    className='shadow-[0px_0px_0px_1px_#E5E5E5,0px_4px_8px_-5px_#00000026] rounded-md h-10 px-3 pl-7 text-[#737373] font-medium border border-[#E8E8E9] text-sm w-[385px]' 
                  />
                  <Search size={14} className='absolute left-2 top-1/2 -translate-y-1/2 text-[#737373]' />
                 </div>

                  <div className="flex font-medium items-center text-[14px] leading-[100%] tracking-[0em] text-center text-[#161924] rounded-lg border border-[#E8E8E9] h-10 p-3 gap-1 shadow-[0px_0px_0px_1px_#E5E5E5,0px_4px_8px_-5px_#00000026]">
                    <ListOrdered size={20} />
                    <p>Sort by</p>
                    <i className="bi bi-chevron-down"></i>
                  </div>
                  
                  <div className="flex font-medium items-center text-[14px] leading-[100%] tracking-[0em] text-center text-[#161924] rounded-lg border border-[#E8E8E9] h-10 p-3 gap-1 shadow-[0px_0px_0px_1px_#E5E5E5,0px_4px_8px_-5px_#00000026]">
                    <Settings2 size={20} />
                    <p>Filter</p>
                  </div>

                  <div className='w-10 h-10 grid place-content-center border border-[#E8E8E9] rounded-lg shadow-[0px_0px_0px_1px_#E5E5E5,0px_4px_8px_-5px_#00000026]'>
                    <i className="bi bi-three-dots-vertical"></i>
                  </div>
              </div>

              </div>
            </div>
          </div>
        </div>

        
    </div>
  )
}

export default Dashboard