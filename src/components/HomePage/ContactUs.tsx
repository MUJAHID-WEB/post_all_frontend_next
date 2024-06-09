import React from 'react'
import { SectionHeading } from './SectionHeading'
import { ContactSvg } from './svg/ContactSvg'

export const ContactUs = () => {
  return (

    <>
      <section id='contactus' className='pt-[80px] container flex flex-col justify-center gap-[50px]'>
        <SectionHeading heading='Contact Us' />
        <div
          className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 pb-[60px] mx-auto text-gray-900">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
              {/* <div className="text-gray-700 mt-8">
                Hate forms? Send us an <span className="underline">email</span> instead.
              </div> */}
            </div>
            <div className="mt-4 text-center">
              <ContactSvg />
            </div>
          </div>
          <div className="">
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
              <input className="w-full text-gray-900 mt-2 p-3 rounded-lg border"
                type="text" placeholder="" />
            </div>
            <div className="mt-4">
              <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
              <input className="w-full text-gray-900 mt-2 p-3 rounded-lg border"
                type="text" />
            </div>
            <div className="mt-4">
              <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
              <textarea
                className="w-full h-32 text-gray-900 mt-2 p-3 rounded-lg border"></textarea>
            </div>
            <div className="mt-4">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>
        </div>

      </section>
    </>

  )
}
