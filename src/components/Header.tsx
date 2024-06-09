'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { RoundedImage } from "./MainPage/RoundedImage";
import { AppContext } from "@/app/theme-provider";
import axios from "axios"
import { useRouter } from "next/navigation";

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const { user, setUser, setToken }: any = useContext(AppContext);
  console.log("🚀 ~ file: Header.tsx:10 ~ Header ~ user:", user)
  const router = useRouter()

  function getCookie(name: string) {
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

  async function refreshYourToken(token: string | null) {
    try {
      const jsonData: any = { "refreshtoken": token };
      const res: any = await axios.post(`${process.env.NEXT_PUBLIC_BACK_END_URL}/auth/refreshtoken`, { "refreshtoken": token });
      setToken(res.data.access_token);
      getUser(res.data.access_token);
    } catch (error) {

    }
  }

  async function getUser(token: string | null) {
    try {
      const res: any = await axios.get(`${process.env.NEXT_PUBLIC_BACK_END_URL}/user`, {
        headers: {
          "Authorization": token
        }
      });
      setUser(res.data);
      setToken(token);
    } catch (error: any) {
      let refreshToken = getCookie('refresh_token');
      if (error?.response?.status === 401 && refreshToken) {
        console.log('get user error', error?.response?.status);
        refreshYourToken(refreshToken)
      }
    }
  }
  useEffect(() => {
    let accessToken = getCookie('access_token');
    if (accessToken) {
      getUser(accessToken);
    } else {
      let refreshToken = getCookie('refresh_token');
      refreshYourToken(refreshToken)
    }
  }, [])

  useEffect(() => {
    let refreshToken = getCookie('refresh_token');
    let id = setInterval(() => {
      refreshYourToken(refreshToken)
    }, 1000 * 60 * 45);

    return () => {
      clearInterval(id);
    }
  }, [])



  return (
    <div className="bg-white px-10 py-3 border-b-[4px] border-[#E8E9ED] flex flex-row justify-between items-center">
      <Link href={"/"} className="text-2xl font-semibold text-[#222222]">
        DevFirm
      </Link>
      <div className="flex flex-row gap-x-6 font-medium text-[#222222]">
        <Link href={"/"}>Home</Link>
        <Link href={"#howitworks"}>How It Works</Link>
        <Link href={"#services"}>Services</Link>
        <Link href={"#otherservices"}>Other Services</Link>
        <Link href={"#pricing"}>Pricing</Link>
        <Link href={"#contactus"}>Contact Us</Link>
      </div>



      <div className="flex flex-row items-center">

        <div>
          {user?._id || true ?
            <Link href={"/mainpage"} className="bg-indigo-600 py-2 px-5 text-lg text-white font-semibold rounded-[40px] ">POST</Link> :
            <Link
              href={"/login"}
              className="bg-indigo-600 py-2 px-5 text-lg text-white font-semibold rounded-[40px] "
            >
              Log In
            </Link>
          }

        </div>

        {/* profile here  */}
        {user?._id || true && <>

          <button onClick={() => setToggle(!toggle)} className="flex flex-row justify-center items-center">
            <div className="pl-6 pr-3">
              {/* <span className="pr-1 font-medium">Md. Aleam</span> */}
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <RoundedImage className='h-[50px] w-[50px]' adsImage='/girl.jpg' adsAlt='' />
          </button>
          {/* Logout */}
          <div className={`py-3 px-6 fixed border flex justify-end mr-[20px] mt-[125px] bg-white
         ${toggle ?
              'right-[0]'
              :
              'right-[-100%]'
            }`}>
            <button onClick={() => ('')} className="font-medium text-[#222222]">Logout</button>
          </div>

        </>}


      </div>

    </div>
  );
};

export default Header;
