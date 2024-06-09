import React from 'react'
import Image from 'next/image'
import Link from "next/link";

export const Banner = () => {
  return (

    <>

<section className="flex flex-row container gap-4 mx-auto xl:px-0">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Share your POST on all Social Platform

            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            You, as a user, experience the advantage of time efficiency and streamlined content distribution
            and set up the same system into your eCommerce, Blog or other websites.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/mainpage"
    
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
               POST
              </Link>
              <Link
                href="#contactus"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
              
                <span>or Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src='/images/social.png'
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
            />
          </div>
        </div>
      </section>
      {/* <section className='container flex flex-row justify-center items-center pt-2 xl:gap-6 lg:gap-5 md:gap-4 sm:gap-1.5'>

        <div className='flex flex-col justify-start items-start xl:gap-6 lg:gap-5 md:gap-4 sm:gap-1.5 w-[40%]'>
  
          <div className='bg-[#333333] w-full border border-gray aspect-[397/198] relative'>
            <Image
              src="/images/steps.png"
              className='text-[#FFFF] '
              alt="CD PLAYER"
              fill={true}
            />
          </div>
          <div className='bg-[#333333] w-full border border-gray aspect-[397/198] relative'>
            <Image
              src="/images/click.png"
              className='text-[#FFFF] '
              alt="CD PLAYER"
              fill={true}
            />
          </div>

        </div>



        <div className='bg-[#333333] border border-gray w-[60%] aspect-[600/418] relative'>
  
          <Image
            src="/images/post.png"
            className='text-[#FFFF] '
            alt="CD PLAYER"
            fill={true}
          />

        </div>

      </section> */}
    </>

  )
}
