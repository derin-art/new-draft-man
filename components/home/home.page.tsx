"use client";
import React from "react";
import LoadingPage from "../LoadingPage";
import Title from "../Title";
import Hero from "../Hero";
import HeroMobile from "../HeroMobile";
import HeaderItem from "../header/header.item";

const Homepage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <LoadingPage />
      <HeaderItem></HeaderItem>
      <div className="sm:hidden">
        <HeroMobile></HeroMobile>
      </div>
      <div className="hidden sm:block">
        {typeof window != "undefined" && <Hero />}
      </div>
    </div>
  );
};

export default Homepage;
