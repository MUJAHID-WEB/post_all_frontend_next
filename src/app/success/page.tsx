'use client'
import React, { useEffect } from 'react'
import { useRouter,useSearchParams } from "next/navigation";

export default function Success(){
  const searchParams = useSearchParams();
  
  useEffect(()=>{
    let access_token = searchParams.get('access_token');
    let refresh_token = searchParams.get('refresh_token');
    let facebook_AccessToken = searchParams.get('facebook_AccessToken');
    let linkedin_access_token = searchParams.get('linkedin_access_token');

    document.cookie = `access_token=${access_token}; expires=${new Date(Date.now() + 1000 * 60 *50)}` //50min
    document.cookie = `refresh_token=${refresh_token}; expires=${new Date(Date.now()+ 1000 * 60 *60 *24*30)}` //30days

    facebook_AccessToken ? document.cookie = `facebook_AccessToken=${facebook_AccessToken}` : ""
    linkedin_access_token ? document.cookie = `linkedin_access_token=${linkedin_access_token}` : ""
    setTimeout(()=>{
      window.close();
    },500)
  },[])
  return(
      <div className='container items-center'>
          <h1 className='text-center'>you are login successfully .</h1>
      </div>
  )
}
