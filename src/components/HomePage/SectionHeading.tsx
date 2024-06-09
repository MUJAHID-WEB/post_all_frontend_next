import React from 'react'

export const SectionHeading = ({ heading }: { heading: string }) => {
    return (
        <div className='pt-6 flex justify-center '>
            <h3 className='text-center font-bold text-[35px] pb-2 relative'>
                {heading}
                <span className='absolute w-full h-1 bg-black bottom-0 left-1/2 -translate-x-1/2'></span>
            </h3>

        </div>
    )
}
