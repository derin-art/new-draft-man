import LoadingPage from "../LoadingPage";

import Hero from "../Hero";
import HeroMobile from "../HeroMobile";
import HeaderItem from "../header/header.item";
import HeaderMobile from "../header/header.mobile";
import { client } from "@/sanity/sanity.client";
import { HOMEPAGE_query } from "@/sanity/queries/sanity.query";
import { HomePageSingletonLinks } from "../header/header.types";

const Homepage = async () => {
  const data: HomePageSingletonLinks = await client.fetch(HOMEPAGE_query);
  return (
    <div className="h-screen w-screen overflow-hidden">
      <LoadingPage />
      <div className="sm:block hidden">
        <HeaderItem data={data}></HeaderItem>
      </div>
      <div className="sm:hidden block">
        <HeaderMobile data={data}></HeaderMobile>
      </div>
      <div className="sm:hidden">
        <HeroMobile></HeroMobile>
      </div>
      <div className="hidden sm:block z-0 relative">
        <Hero></Hero>
      </div>
    </div>
  );
};

export default Homepage;
