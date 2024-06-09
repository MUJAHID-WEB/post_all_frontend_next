import React from 'react'
import { RoundedImage } from './RoundedImage'

export const ProfileCard = () => {
    return (
        <>
            <div className='w-[22.5%]'>
                <div className=' flex flex-col justify-center items-center bg-white p-7 rounded-[20px] border border-gray mb-4'>
                    <RoundedImage 
                    className='w-[50px] h-[50px]' 
                    adsImage='/girl.jpg' 
                    adsAlt=''/>

                    <p className='pt-5 font-bold text-lg text-center'>Md. Aleam Hossain</p>

                </div>
                <div className=' flex flex-col items-start bg-white px-7 py-5 gap-2 rounded-[20px] border border-gray '>
                    
                    <h3 className=' font-bold text-lg'>List of Connections</h3>

                    {/* Facebook Pages */}

                    <h4 className='font-semibold text-[#017AB6]'>Facebook Pages</h4>

                    <div className='pl-2 flex flex-col gap-1'>
                        <p className='text-sm font-light'>My World</p>
                        <p className='text-sm font-light'>My World</p>
                        <p className='text-sm font-light'>My World</p>
                    </div>

                    {/* Facebook Groups */}
                    <h4 className='font-semibold text-[#017AB6]'>Facebook Groups</h4>
                    <div className='pl-2 flex flex-col gap-1'>
                        <p className='text-sm font-light'>My World</p>
                        <p className='text-sm font-light'>My World</p>
                        <p className='text-sm font-light'>My World</p>
                    </div>

                    {/* LinkedIn Pages */}
                    <h4 className='font-semibold text-[#017AB6]'>LinkedIn Pages</h4>
                    <div className='pl-2 flex flex-col gap-1'>
                        <p className='text-sm font-light'>My World</p>
                        <p className='text-sm font-light'>My World</p>
                        <p className='text-sm font-light'>My World</p>
                    </div>

                    {/* Twitter Pages */}
                    <h4 className='font-semibold text-[#017AB6]'>Twitter Pages</h4>
                    <div className='pl-2 flex flex-col gap-1'>
                        <p className='text-sm font-light'>My World</p>
                        <p className='text-sm font-light'>My World</p>
                        <p className='text-sm font-light'>My World</p>
                    </div>

                    {/* Instagram Pages */}
                    <h4 className='font-semibold text-[#017AB6]'>Instagram Pages</h4>
                    <div className='pl-2 flex flex-col gap-1'>
                        <p className='text-sm font-light'>My World</p>
                        <p className='text-sm font-light'>My World</p>
                        <p className='text-sm font-light'>My World</p>
                    </div>

                </div>



            </div>


        </>
    )
}
