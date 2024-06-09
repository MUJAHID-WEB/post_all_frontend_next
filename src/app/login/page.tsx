"use client";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';
import { AppContext } from "../theme-provider";


export default function LoginPage() {
  const [customLogin, setCustomLogin] = useState(false);

  const {setUser,setToken}:any = useContext(AppContext);
  const router = useRouter()

  const handleCustomLoginClick = () => {
    setCustomLogin(true);
  };
  const linkArr = [
    {
      icon: "fa-brands fa-facebook-f",
      title: "Continue with Facebook",
      bg: "bg-[#3C5A98]",
      login:async  function() {
        const facebookLoginUrl = `${process.env.NEXT_PUBLIC_BACK_END_URL}/facebook/login`;
      
        // Open a new window or tab for Facebook login
        window.open(facebookLoginUrl,"_blank",'width:500,height:600');
        // const newWindow = window.open(
        //   facebookLoginUrl,
        //   "_blank",
        //   "width=500,height=600"
        // );
      }
      
    },
    {
      icon: "fa-brands fa-linkedin ",
      title: "Continue with Linkedin",
      bg: "bg-[#017AB6]",
      login: function(){
        const linkedinLoginUrl = `${process.env.NEXT_PUBLIC_BACK_END_URL}/linkedin/login`;
      
        // Open a new window or tab for Facebook login
        window.open(linkedinLoginUrl,"_blank",'width:500,height:600');
      }
    },
    {
      icon: "fa-brands fa-twitter ",
      title: "Continue with Twitter",
      bg: "bg-[#1A9DF1]",
      login: function(){
        const twitterLoginUrl = `${process.env.NEXT_PUBLIC_BACK_END_URL}/twitter/login`;
      
        // Open a new window or tab for Facebook login
        window.open(twitterLoginUrl,"_blank",'width:500,height:600');
      }
    },
    {
      icon: "fa-brands fa-instagram",
      title: "Continue with Instagram",
      bg: "bg-[#D627BC]",
      login: function(){
        
      }
    },
    {
      icon: "fa-brands fa-google",
      title: "Continue with Google",
      bg: "bg-[#DD4B38]",
      login: function(){
        
      }
    },
  ];

  useEffect(()=>{
      // Function to get the value of a specific cookie
    function getCookie(name:string) {
      const cookies = document.cookie.split(';');
      
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        
        // Check if this is the cookie we are looking for
        if (cookie.startsWith(name + '=')) {
          return cookie.substring(name.length + 1)?.split('=')[0];
        }
      }
  
      // Cookie not found
      return null;
    }

    // Example usage
    let id = setInterval(async ()=>{
      let accessToken = getCookie('access_token');
      console.log('Access token',accessToken);
      if(accessToken){
        (async ()=>{
          console.log('here');
          
          const res:any = await  axios.get(`${process.env.NEXT_PUBLIC_BACK_END_URL}/user`,{
            headers:{
              "Authorization": accessToken
            }
          });

          if(res.status == 401){
            let refreshToken = getCookie('refresh_token');
          }
          setUser(res.data);
          setToken(accessToken);
          clearTimeout(id);
          router.push('/mainpage')
        })()
        
      }
    },3000)

    return ()=>{
      clearTimeout(id);
    }
      

  },[])
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="w-[440px] py-3 bg-[#5BAAA3]/30 rounded-md flex flex-col items-center justify-center">
        <div className="w-[416px] p-10 bg-white rounded-md">
          <h1 className="text-[#222222] text-2xl font-bold text-center pb-5 border-b">
            Sign Up or Log In
          </h1>
          {linkArr.map((item: any, i: number) => (
            <button
              key={i}
              type="button"
              onClick={() => item.login()}
              className={`w-full ${item.bg} rounded mt-5 text-start`}
            >
              <i
                className={`w-10 text-center text-white border-r py-2 ${item.icon}`}
              ></i>
              <span className="text-white text-sm font-medium pl-10">
                {item.title}
              </span>
            </button>
          ))}
          <button
            type="button"
            onClick={handleCustomLoginClick}
            className="w-full py-1.5 rounded mt-5 text-center text-sm font-medium border border-[#5BAAA3]/30"
          >
            Custom Log In
          </button>
          {customLogin && (
            <div className="mt-5">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-1.5 text-sm border border-gray-300 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mt-3 p-1.5 text-sm border border-gray-300 rounded"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
