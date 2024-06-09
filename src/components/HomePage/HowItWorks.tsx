import React from 'react'
import Image from 'next/image'
import { SectionHeading } from './SectionHeading'

export const HowItWorks = () => {
  return (
    <>

      <section id='howitworks' className='pt-10 container flex flex-col justify-center gap-[50px]'>

        <SectionHeading heading='How It Works '/>

        <HiwCard
          heading='Step 01'
          description='Create your account using one of your Social Media Account like Facebook, LinkedIn, Twiter, Instagram, Google or using Email and Password.'
          className='text-right'
          adsImage='/images/step01.png'
          adsAlt='' />

        <HiwCard
          heading='Step 02'
          description='Connect your Social Media Account where you want to post within SECONDS. When you connect your accounts, its shows your Facebook Pages, Groups, FB Page liked Instagram and others.'
          className='!flex-row-reverse'
          adsImage='/images/step02.png'
          adsAlt='' />

        <HiwCard
          heading='Step 03'
          description='Write your POST, upload image or video and select the pages, groups and accounts where you want to share. Finally clicking the POST button, your ideas will be shared on selected pages, groups and accounts within SECONDS.'
          className='text-right'
          adsImage='/images/step03.png'
          adsAlt='' />


      </section>

    </>

  )
}



// Card of How it work 
export const HiwCard = ({ heading, description, className, adsImage, adsAlt }: { heading: string; description: string; className: string; adsImage: string; adsAlt: string }) => {
  return (
    <div className={`${className} flex flex-row justify-start gap-12`}>
      <div className='w-[50%] aspect-[600/300]'>
        <h3 className='font-bold text-[20px] border-b pb-2'>{heading}</h3>
        <p className='py-3 font-medium text-[17px]'>{description}</p>
      </div>

      <div className='w-[50%] aspect-[600/300] relative overflow-hidden border border-gray'>
        <Image
          src={adsImage}
          className='text-[#FFFF]'
          alt={adsAlt}
          fill
        />

      </div>
    </div>
  )
}

