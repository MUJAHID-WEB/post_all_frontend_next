"use client";
import React from "react";

const SocialConnect = () => {
  const linkArr = [
    {
      icon: "fa-brands fa-facebook-f",
      title: "Continue with Facebook",
      btnText: "Continue with Facebook",
      bg: "bg-[#3C5A98]",
    },
    {
      icon: "fa-brands fa-linkedin ",
      title: "Continue with Linkedin",
      btnText: "Continue with Linkedin",
      bg: "bg-[#017AB6]",
    },
    {
      icon: "fa-brands fa-twitter ",
      title: "Continue with Twitter",
      btnText: "Continue with Twitter",
      bg: "bg-[#1A9DF1]",
    },
    {
      icon: "fa-brands fa-instagram",
      title: "Continue with Instagram",
      btnText: "Continue with Instagram",
      bg: "bg-[#D627BC]",
    },
    {
      icon: "fa-brands fa-google",
      title: "Continue with Google",
      btnText: "Continue with Google",
      bg: "bg-[#DD4B38]",
    },
  ];
  return (
    <section className="bg-white px-7 py-10 rounded-[20px] border border-gray flex flex-col items-center">
      <div className="w-[300px] gap-y-5 flex flex-col">
        <div className="flex flex-row items-center gap-x-4 text-xl font-medium text-[#222222]">
          <i className="fa-solid fa-right-to-bracket"></i>
          <p>Social Media Connect</p>
        </div>
        {linkArr.map((item: any, i: number) => (
          <div key={i} className="">
            <span className="font-medium text-[#222222]">{item.title}</span>
            <button
              type="button"
              onClick={() => ({})}
              className={`w-full ${item.bg} rounded mt-3 py-2`}
            >
              <i className={`text-center text-white ${item.icon}`}></i>
              <span className="text-white text-sm pl-2">{item.btnText}</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialConnect;
