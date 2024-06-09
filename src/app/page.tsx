'use client'
import Link from "next/link";
import LoginPage from "./login/page";
import { useContext, useEffect, useState } from "react";
import { HomePage } from "@/components/HomePage/HomePage";
import { useRouter } from "next/navigation";
import { AppContext } from "./theme-provider";
import axios from "axios";



export default function LandingPage() {
  const {setUser,setToken}:any = useContext(AppContext);
  const router = useRouter()
  // useEffect(()=>{
  //   // Function to get the value of a specific cookie
  // function getCookie(name:string) {
  //   const cookies = document.cookie.split(';');
    
  //   for (let i = 0; i < cookies.length; i++) {
  //     const cookie = cookies[i].trim();
      
  //     // Check if this is the cookie we are looking for
  //     if (cookie.startsWith(name + '=')) {
  //       return cookie.substring(name.length + 1)?.split('=')[0];
  //     }
  //   }

  //   // Cookie not found
  //   return null;
  // }

  // // Example usage
  // // let id = setInterval(async ()=>{
  //   let accessToken = getCookie('access_token');
  //   console.log('Access token',accessToken);
  //   if(accessToken){
  //     (async ()=>{
  //       console.log('here');
        
  //       const res:any = await  axios.get(`${process.env.NEXT_PUBLIC_BACK_END_URL}/user`,{
  //         headers:{
  //           "Authorization": accessToken
  //         }
  //       });

  //       if(res.status == 401){
  //         let refreshToken = getCookie('refresh_token');
  //       }
  //       setUser(res.data);
  //       setToken(accessToken);
  //       // clearTimeout(id);
        
  //     })()
      
  //   }
  //   // },3000)

  //   return ()=>{
  //     // clearTimeout(id);
  //   }
  // },[])
  
  
  return (
      <div className="h-screen">
            <HomePage />
      </div>
  );
}
