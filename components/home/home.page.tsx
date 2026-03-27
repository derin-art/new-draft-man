"use client";
import React from "react";
import LoadingPage from "../LoadingPage";
import Title from "../Title";
import Hero from "../Hero";
import HeaderItem from "../header/header.item";

const Homepage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <LoadingPage />
      <HeaderItem></HeaderItem>
      {typeof window != "undefined" && <Hero />}
    </div>
  );
};

export default Homepage;
