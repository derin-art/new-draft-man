import Title from "../Title";
import EmailLink from "./emai.link";
import { ArrowRight } from "lucide-react";
import Links from "./links";
import Time from "./time";
import { HomePageSingletonLinks } from "./header.types";

const HeaderMobile = ({ data }: { data: HomePageSingletonLinks }) => {
  return (
    <div
      style={{
        zIndex: 1,
        fontFamily: "public-sans",
      }}
      className="absolute top-12.25 left-0 w-full text-white text-sm lg:text-[20px] 2xl:text-[clamp(10px,0.6vw,20px)]"
    >
      <div className="flex flex-col justify-between w-full px-8 2xl:px-[2vw]  sm:flex-row">
        <div className="tracking-tight uppercase">
          <Title />
        </div>

        <div className="flex flex-col  text-[clamp(10px,0.6vw,25px)] gap-x-14 tracking-[0.5] mt-[21vh]">
          <h1 className="md:max-w-105 sm:w-[40vw] md:w-[30vw] lg:w-[20vw] 2xl:max-w-200 leading-loose ">
            <div className="">{data.text1}</div>
            <div className="">
              {data.text2}
              <div>
                <a className="flex mt-10 group items-center" href="/">
                  Our Capabilites{" "}
                  <ArrowRight
                    size={10}
                    className="inline-block ml-2 group-hover:ml-2 duration-300 2xl:hidden "
                  />
                  <ArrowRight className="2xl:inline-block ml-2 group-hover:ml-2 duration-300 hidden max-w-6 w-[0.7vw]" />
                </a>
              </div>
            </div>
          </h1>

          <div className="flex   mt-[19vh]  sm:w-[20vw]  md:w-[14vw] justify-between  ">
            <div className=" max-w-50 ">
              <h1>
                With love from Lagos *{" "}
                <span className="inline-block">
                  <Time />
                </span>{" "}
                GMT +1 we work with clients worldwide.
              </h1>
              <div className="mt-5.5">
                <span className="flex 2xl:gap-x-2 gap-x-2 items-center">
                  Say{" "}
                  <span className="inline-block">
                    <EmailLink></EmailLink>
                  </span>
                  <ArrowRight
                    size={10}
                    className="inline-block group-hover:ml-2 duration-300 2xl:hidden"
                  />
                  <ArrowRight className="2xl:inline-block  group-hover:ml-2 duration-300 hidden max-w-6 w-[0.7vw]" />{" "}
                </span>
                or book an
              </div>
            </div>

            {/*   <a
                    className="underline sm:hidden"
                    href="mailto:hello@anewdraft.com "
                  >
                    hello@anewdraft.com
                  </a>{" "} */}

            <div className="">
              <Links
                data={{
                  instagram: data.link3,
                  linkedin: data.link4,
                  x: data.link1,
                  behance: data.link2,
                }}
              ></Links>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
