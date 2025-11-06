import React from 'react'
import DashSidebar from '../Components/DashSidebar'
import { Search, Settings2, ListOrdered } from 'lucide-react'
import TrendingTopics from '../Components/TrendingTopics'
import TemplatesTable from '../Components/TemplatesTable'
import PerformanceDashboard from '../Components/PerformanceDashboard'

const Dashboard = () => {

  return (
    <div>
        <div className="flex flex-col lg:flex-row justify-end">
          <DashSidebar />
          
          <div className='md:basis-[80%] basis-full p-5'>
            <div className="flex justify-between items-center flex-col md:flex-row max-sm:gap-5 md:ps-15 lg:ps-0">
              <div className="relative w-fit max-sm:ms-auto">
              <input 
                type="search" 
                placeholder='Search' 
                className='shadow-[0px_0px_0px_1px_#E5E5E5,0px_4px_8px_-5px_#00000026] rounded-md h-9 px-3 pl-7 text-[#737373] font-medium text-sm outline-0' 
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 py-8">
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

            <div className='py-2.5 border border-[#E8E8E9] rounded-2xl'>
              <div className="flex justify-between items-center flex-col md:flex-row px-4 max-sm:gap-2">
                <h5 className='font-medium text-[18px] leading-[150%] tracking-[0em] text-start text-[#161924] basis-[30%]'>Newsletters</h5>

              <div className='flex gap-3 items-center lg:flex-nowrap flex-wrap basis-[70%] '>
                 <div className="relative w-fit lg:basis-[60%] basis-full">
                  <input 
                    type="search" 
                    placeholder='Search data' 
                    className='shadow-[0px_0px_0px_1px_#E5E5E5,0px_4px_8px_-5px_#00000026] rounded-md h-10 px-3 pl-7 text-[#737373] font-medium border border-[#E8E8E9] text-sm w-full outline-0' 
                  />
                  <Search size={14} className='absolute left-2 top-1/2 -translate-y-1/2 text-[#737373]' />
                 </div>

                  <div className="relative lg:basis-[20%] basis-[40%] md:basis-[45%]">
                    <div className="flex items-center font-medium text-[14px] text-[#161924] border border-[#E8E8E9] h-10 p-3 gap-1 rounded-lg shadow-[0px_0px_0px_1px_#E5E5E5,0px_4px_8px_-5px_#00000026]">
                      <ListOrdered size={20} />
                      <p>Sort by</p>
                      <i className="bi bi-chevron-down ml-auto"></i>
                    </div>

                    <select
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={(e) => console.log(e.target.value)}
                    >
                      <option value="newest">Newest</option>
                      <option value="oldest">Oldest</option>
                      <option value="a-z">A to Z</option>
                      <option value="z-a">Z to A</option>
                    </select>
                </div>
                  <div className="flex font-medium items-center text-[14px] leading-[100%] tracking-[0em] text-center text-[#161924] rounded-lg border border-[#E8E8E9] h-10 p-3 gap-1 shadow-[0px_0px_0px_1px_#E5E5E5,0px_4px_8px_-5px_#00000026] lg:basis-[15%] basis-[35%]">
                    <Settings2 size={20} />
                    <p>Filter</p>
                  </div>

                  <div className='w-10 h-10 grid place-content-center border border-[#E8E8E9] rounded-lg shadow-[0px_0px_0px_1px_#E5E5E5,0px_4px_8px_-5px_#00000026] lg:basis-[6%] basis-[17%] md:basis-[15%]'>
                    <i className="bi bi-three-dots-vertical"></i>
                  </div>
              </div>

              </div>

              <div className="mt-5 overflow-x-auto">
                {/* <table className="min-w-[1200px] lg:min-w-full w-full border-collapse">
                <thead>
                  <tr className="bg-[#F9F9FA]">
                    <th className="text-[#5A5C66] font-medium text-[14px] border border-[#E8E8E9] py-2.5 px-4 text-start flex items-center gap-2">
                      <input type="checkbox" /> Template
                    </th>
                    <th className="text-[#5A5C66] font-medium text-[14px] border border-[#E8E8E9] py-2.5 px-4 text-start">
                      Preview snippet
                    </th>
                    <th className="text-[#5A5C66] font-medium text-[14px] border border-[#E8E8E9] py-2.5 px-4 text-start">
                      Generated date
                    </th>
                    <th className="text-[#5A5C66] font-medium text-[14px] border border-[#E8E8E9] py-2.5 px-4 text-start">
                      Topic
                    </th>
                    <th className="text-[#5A5C66] font-medium text-[14px] border border-[#E8E8E9] py-2.5 px-4 text-start">
                      Linked Character
                    </th>
                    <th className="text-[#5A5C66] font-medium text-[14px] border border-[#E8E8E9] py-2.5 px-4 text-start"></th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="text-[#5A5C66] font-medium text-[14px] border border-[#E8E8E9] py-2.5 px-4 flex items-center gap-2">
                      <input type="checkbox" />
                      <img src="/amazon.jpg" className="w-7 h-7 rounded-full" alt="" />
                      <div className="flex flex-col">
                        <p>Amazon Hacks</p>
                        <p>Edition 1</p>
                      </div>
                    </td>
                    <td className="text-[#5A5C66] text-[14px] border border-[#E8E8E9] px-4">
                      Cloud Infrastructure Migration for X...
                    </td>
                    <td className="text-[#5A5C66] text-[14px] border border-[#E8E8E9] py-2.5 px-4">
                      Mon, 12 Jan 2025
                    </td>
                    <td className="border border-[#E8E8E9] text-center py-2.5 px-4">
                      <div className="text-[#864DC0] text-[12px] font-medium rounded-sm border border-[#DEC2FA] bg-[#F3EBFA] py-2 px-4 w-fit">
                        AI Trends
                      </div>
                    </td>
                    <td className="text-[#5A5C66] border border-[#E8E8E9] py-2.5 px-4">
                      <div className="flex gap-3">
                        <div className="flex items-center gap-2">
                          <img src="/prof.jpg" alt="" className="w-7 h-7 rounded-full" />
                          <small>Professor</small>
                        </div>
                        <div className="flex items-center gap-2">
                          <img src="/cartoon.jpg" alt="" className="w-7 h-7 rounded-full" />
                          <small>Cartoon</small>
                        </div>
                      </div>
                    </td>
                    <td className="border border-[#E8E8E9] py-2.5 px-4">
                      <i className="bi bi-three-dots"></i>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-[#5A5C66] font-medium text-[14px] border border-[#E8E8E9] py-2.5 px-4 flex items-center gap-2">
                      <input type="checkbox" />
                      <img src="/amazon.jpg" className="w-7 h-7 rounded-full" alt="" />
                      <div className="flex flex-col">
                        <p>Amazon Hacks</p>
                        <p>Edition 1</p>
                      </div>
                    </td>
                    <td className="text-[#5A5C66] text-[14px] border border-[#E8E8E9] px-4">
                      Cloud Infrastructure Migration for X...
                    </td>
                    <td className="text-[#5A5C66] text-[14px] border border-[#E8E8E9] py-2.5 px-4">
                      Mon, 12 Jan 2025
                    </td>
                    <td className="border border-[#E8E8E9] text-center py-2.5 px-4">
                      <div className="text-[#864DC0] text-[12px] font-medium rounded-sm border border-[#DEC2FA] bg-[#F3EBFA] py-2 px-4 w-fit">
                        Climate Change
                      </div>
                    </td>
                    <td className="text-[#5A5C66] border border-[#E8E8E9] py-2.5 px-4">
                      <div className="flex gap-3">
                        <div className="flex items-center gap-2">
                          <img src="/prof.jpg" alt="" className="w-7 h-7 rounded-full" />
                          <small>Professor</small>
                        </div>
                        <div className="flex items-center gap-2">
                          <img src="/cartoon.jpg" alt="" className="w-7 h-7 rounded-full" />
                          <small>Cartoon</small>
                        </div>
                      </div>
                    </td>
                    <td className="border border-[#E8E8E9] py-2.5 px-4">
                      <i className="bi bi-three-dots"></i>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-[#5A5C66] font-medium text-[14px] border border-[#E8E8E9] py-2.5 px-4 flex items-center gap-2">
                      <input type="checkbox" />
                      <img src="/amazon.jpg" className="w-7 h-7 rounded-full" alt="" />
                      <div className="flex flex-col">
                        <p>Amazon Hacks</p>
                        <p>Edition 1</p>
                      </div>
                    </td>
                    <td className="text-[#5A5C66] text-[14px] border border-[#E8E8E9] px-4">
                      Cloud Infrastructure Migration for X...
                    </td>
                    <td className="text-[#5A5C66] text-[14px] border border-[#E8E8E9] py-2.5 px-4">
                      Mon, 12 Jan 2025
                    </td>
                    <td className="border border-[#E8E8E9] text-center py-2.5 px-4">
                      <div className="text-[#864DC0] text-[12px] font-medium rounded-sm border border-[#DEC2FA] bg-[#F3EBFA] py-2 px-4 w-fit">
                        Sustainable Living
                      </div>
                    </td>
                    <td className="text-[#5A5C66] border border-[#E8E8E9] py-2.5 px-4">
                      <div className="flex gap-3">
                        <div className="flex items-center gap-2">
                          <img src="/prof.jpg" alt="" className="w-7 h-7 rounded-full" />
                          <small>Professor</small>
                        </div>
                        <div className="flex items-center gap-2">
                          <img src="/cartoon.jpg" alt="" className="w-7 h-7 rounded-full" />
                          <small>Cartoon</small>
                        </div>
                      </div>
                    </td>
                    <td className="border border-[#E8E8E9] py-2.5 px-4">
                      <i className="bi bi-three-dots"></i>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-[#5A5C66] font-medium text-[14px] border border-[#E8E8E9] py-2.5 px-4 flex items-center gap-2">
                      <input type="checkbox" />
                      <img src="/amazon.jpg" className="w-7 h-7 rounded-full" alt="" />
                      <div className="flex flex-col">
                        <p>Amazon Hacks</p>
                        <p>Edition 1</p>
                      </div>
                    </td>
                    <td className="text-[#5A5C66] text-[14px] border border-[#E8E8E9] px-4">
                      Cloud Infrastructure Migration for X...
                    </td>
                    <td className="text-[#5A5C66] text-[14px] border border-[#E8E8E9] py-2.5 px-4">
                      Mon, 12 Jan 2025
                    </td>
                    <td className="border border-[#E8E8E9] text-center py-2.5 px-4">
                      <div className="text-[#864DC0] text-[12px] font-medium rounded-sm border border-[#DEC2FA] bg-[#F3EBFA] py-2 px-4 w-fit">
                        AI Trends & Research
                      </div>
                    </td>
                    <td className="text-[#5A5C66] border border-[#E8E8E9] py-2.5 px-4">
                      <div className="flex gap-3">
                        <div className="flex items-center gap-2">
                          <img src="/prof.jpg" alt="" className="w-7 h-7 rounded-full" />
                          <small>Professor</small>
                        </div>
                        <div className="flex items-center gap-2">
                          <img src="/cartoon.jpg" alt="" className="w-7 h-7 rounded-full" />
                          <small>Cartoon</small>
                        </div>
                      </div>
                    </td>
                    <td className="border border-[#E8E8E9] py-2.5 px-4">
                      <i className="bi bi-three-dots"></i>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-[#5A5C66] font-medium text-[14px] border border-[#E8E8E9] py-2.5 px-4 flex items-center gap-2">
                      <input type="checkbox" />
                      <img src="/amazon.jpg" className="w-7 h-7 rounded-full" alt="" />
                      <div className="flex flex-col">
                        <p>Amazon Hacks</p>
                        <p>Edition 1</p>
                      </div>
                    </td>
                    <td className="text-[#5A5C66] text-[14px] border border-[#E8E8E9] px-4">
                      Cloud Infrastructure Migration for X...
                    </td>
                    <td className="text-[#5A5C66] text-[14px] border border-[#E8E8E9] py-2.5 px-4">
                      Mon, 12 Jan 2025
                    </td>
                    <td className="border border-[#E8E8E9] text-center py-2.5 px-4">
                      <div className="text-[#864DC0] text-[12px] font-medium rounded-sm border border-[#DEC2FA] bg-[#F3EBFA] py-2 px-4 w-fit">
                        Tech Innovations
                      </div>
                    </td>
                    <td className="text-[#5A5C66] border border-[#E8E8E9] py-2.5 px-4">
                      <div className="flex gap-3">
                        <div className="flex items-center gap-2">
                          <img src="/prof.jpg" alt="" className="w-7 h-7 rounded-full" />
                          <small>Professor</small>
                        </div>
                        <div className="flex items-center gap-2">
                          <img src="/cartoon.jpg" alt="" className="w-7 h-7 rounded-full" />
                          <small>Cartoon</small>
                        </div>
                      </div>
                    </td>
                    <td className="border border-[#E8E8E9] py-2.5 px-4">
                      <i className="bi bi-three-dots"></i>
                    </td>
                  </tr>
                </tbody>
                </table> */}

                <TemplatesTable />


              </div>
                <div className="flex flex-col md:flex-row pb-2.5 items-start max-sm:gap-3 md:items-center justify-between mt-4 px-4">
                {/* Left: Show items dropdown */}
                <div className="flex items-center gap-2 text-[#5A5C66] text-sm">
                  <span>Show items</span>
                  <select
                    className="border border-[#E8E8E9] rounded-md px-3 py-1.5 focus:outline-none shadow"
                    defaultValue="25"
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>

                {/* Right: Pagination */}
                <div className="flex items-center gap-1">
                  {/* Previous button */}
                  <button className="border border-[#E8E8E9] rounded-md px-2 py-1 text-[#5A5C66] hover:bg-[#F9F9FA] shadow">
                    <i className="bi bi-arrow-left"></i>
                  </button>

                  {/* Page numbers */}
                  <div className="flex items-center border border-[#E8E8E9] rounded-md overflow-hidden bg-[#F9F9FA]">
                    {[1, 2, 3].map((page) => (
                      <button
                        key={page}
                        className={`px-3 py-1.5 text-sm ${
                          page === 1
                            ? "bg-white font-semibold shadow rounded-md border border-[#E8E8E9]"
                            : "hover:bg-[#F9F9FA]"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    <span className="px-2 text-[#5A5C66]">…</span>
                    <button className="px-3 py-1.5 text-sm hover:bg-[#F9F9FA]">6</button>
                  </div>

                  {/* Next button */}
                  <button className="border border-[#E8E8E9] rounded-md px-2 py-1 text-[#5A5C66] hover:bg-[#F9F9FA] shadow">
                   <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
                </div>



            </div>
            <div className="flex flex-col md:flex-row items-stretch gap-4 mt-6">
              <div className="basis-[30%]">
                <PerformanceDashboard />
              </div>
              <div className="basis-[70%]">
                <TrendingTopics />
              </div>

            </div>
          </div>
        </div>

        
    </div>
  )
}

export default Dashboard