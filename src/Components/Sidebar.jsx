import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <div className='bg-[#FEF9EB] md:fixed left-0 bottom-0 top-0 max-sm:h-[80dvh] md:w-[30%] p-10 flex flex-col justify-between'>
            <img src="logo.png" alt="illuminated-press logo" className='w-[140px]' />
            
            <div>
                <img src="image1.jpg" alt="image1" className='h-12 w-12 rounded-full' />
                <p className='text-md font-normal mt-5 leading-5'>This platform has completely streamlined how I manage my daily workflows. The intuitive dashboard and smooth login experience save me valuable time every day.</p>
            </div>


            <div>
                <h5 className='font-semibold text-base'>John Doe</h5>
                <p className='font-normal text-sm'>Lead UX Designer at BrightWave Solutions</p>
            </div>
       </div>
    </div>
  )
}

export default Sidebar