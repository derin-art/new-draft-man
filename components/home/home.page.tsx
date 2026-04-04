"use client";
import React from "react";
import LoadingPage from "../LoadingPage";
import Title from "../Title";
import Hero from "../Hero";
import HeroMobile from "../HeroMobile";
import HeaderItem from "../header/header.item";
import HeaderMobile from "../header/header.mobile";

const Homepage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <LoadingPage />
      <div className="sm:block hidden">
        <HeaderItem></HeaderItem>
      </div>
      <div className="sm:hidden block">
        <HeaderMobile></HeaderMobile>
      </div>
      <div className="sm:hidden">
        <HeroMobile></HeroMobile>
      </div>
      <div className="hidden sm:block z-0 relative">
        {typeof window != "undefined" && <Hero />}
      </div>
    </div>
  );
};

export default Homepage;
