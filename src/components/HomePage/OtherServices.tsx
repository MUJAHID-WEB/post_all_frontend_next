import React, { ReactNode } from 'react'
import { SectionHeading } from './SectionHeading'

export const OtherServices = () => {
  return (
    <>
      <section id='otherservices' className='pt-[80px] container flex flex-col justify-center '>
        <SectionHeading heading='Other Services' />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">

       <ServicesCard 
       icon=''
       title='Web App Development' 
       description="We deliver scalable web applications with a diverse tech stack, prioritizing user-centric design, seamless connectivity, and real-time functionality. Our focus on security and performance ensures a reliable and high-quality experience, while embracing the latest technologies for innovation."/>
        <ServicesCard 
       icon=''
       title='Mobile App Development' 
       description="Our mobile app development ensures cross-platform reach, scalable architecture, user-centric design, seamless connectivity, real-time features, secure payments, and global accessibility on major app stores. Our comprehensive backend enables advanced functionality."/>
         <ServicesCard 
       icon=''
       title='Server & Database Management' 
       description="Optimize your IT infrastructure with us. Expert Server & Database Management ensures proactive maintenance, monitoring, and performance optimization. Our robust backup solutions safeguard against downtime, saving you time and resources for core business activities."/>
         {/* <ServicesCard 
       icon=''
       title='Google Analytics' 
       description="Google Analytics will elevate your online strategy with actionable insights. Tailor your website, refine marketing efforts, and enhance user experience for increased traffic, improved ROI, and a competitive edge in the digital landscape."/> */}
         <ServicesCard 
       icon=''
       title='Adtech/Tracker Pixel Integrations' 
       description="We'll maximize your digital marketing impact with precise Adtech/Tracker Pixel Integrations. Optimize data collection, refine strategies, and boost ROI. Choose DevFirm for informed decision-making and strategic advantage."/>
         <ServicesCard 
       icon=''
       title='Headless CMS' 
       description="Our Headless CMS offers streamline content management, boost agility for market responsiveness, enhance user experience across devices, foster collaboration, and future-proof your digital strategy. Your key to a dynamic digital future."/>
         <ServicesCard 
       icon=''
       title='IT Consultancy' 
       description="We'll be your partner for peak digital performance. From infrastructure optimization to advanced analytics, we drive efficiency and growth. Trust us for top-tier web and mobile solutions. Choose DevFirm for success in the digital realm."/>
     




        </div>

      </section>
    </>

  )
}




export const ServicesCard = ({title, icon, description}:{title: string;
  icon: string; description: string; }) => {
  return (
    <div className=" p-10 transition-all rounded flex flex-col justify-start items-start hover:shadow-xl">
    <div className="icon text-7xl pb-6">
     {/* icon */}
     
    </div>
    <div className="desc ">
      <h3 className="font-bold text-2xl leading-8">{title}</h3>
      <p className="font-normal text-lg my-3">{description}</p>
    </div>
  </div>
  )
}

