import React from 'react'
import Header from "@/components/Header";
import { Banner } from './Banner';
import { HowItWorks } from './HowItWorks';

import { Footer } from '../Footer';
import { Services } from './Services';
import { OtherServices } from './OtherServices';
import { ContactUs } from './ContactUs';
import PricingTable from './Pricing';

export const HomePage = () => {
  return (

    <>
    <div className='bg-[#F5F9FC]'>
      <Header />
      <div className="container flex flex-col justify-center items-start pt-12">
      <Banner />
      <HowItWorks />
      <Services />
      <OtherServices />
      <PricingTable />
      <ContactUs />
      </div>
      <Footer />
    </div>
    </>
  )
}
