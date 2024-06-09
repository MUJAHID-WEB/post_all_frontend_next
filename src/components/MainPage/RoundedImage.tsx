import React from 'react'
import Image from 'next/image'

export const RoundedImage =  ({ className, adsImage, adsAlt }: { className: string; adsImage: string; adsAlt: string }) =>{
  return (
    <div className={`${className} rounded-full relative overflow-hidden border border-gray`}>
      <Image
        src={adsImage}
        className='text-[#FFFF] object-cover '
        alt={adsAlt}
        fill={true}
      />
    {/* <Image src="/girl.jpg" alt="" fill className="" /> */}
</div>
  )
}
