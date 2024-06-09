'use client'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation';

export default function NotFound(){
  const pathname = usePathname();
  useEffect(()=>{
    console.log('Full URL path:', process.env.NEXT_PUBLIC_BACK_END_URL);

    if(pathname == '/mainPage' || pathname == '/mainpage'){
        window.close();
    }
  },[])
  return(
      <div className='container items-center'>
          <h1 className='text-center'>This page is not available</h1>
      </div>
  )
}