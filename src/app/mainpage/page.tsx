import { CreatePost } from "@/components/MainPage/CreatePost";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { ProfileCard } from "@/components/MainPage/ProfileCard";
import { RecentPost } from "@/components/MainPage/RecentPost";
import SocialConnect from "@/components/MainPage/SocialConnect";
import React from "react";

const MainPage = () => {
  return (
    <>

    <div className="bg-[#F5F9FC]">
      <Header />
      <div className="container flex flex-row justify-center items-start pt-12">
        <ProfileCard />


        <div className="flex flex-col px-4 gap-4">
          <CreatePost />
          <SocialConnect />
        </div>

        <RecentPost />

      </div>

      <Footer />
      
      </div>
    </>
  );
};

export default MainPage;
