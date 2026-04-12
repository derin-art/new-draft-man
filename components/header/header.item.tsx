import Title from "../Title";
import EmailLink from "./emai.link";
import { ArrowRight } from "lucide-react";
import Links from "./links";
import Time from "./time";
import CapabilitiesLink from "./capabilities.link";

import { HomePageSingletonLinks } from "./header.types";

const HeaderItem = async ({ data }: { data: HomePageSingletonLinks }) => {
  return (
    <div
      style={{
        zIndex: 1,
        fontFamily: "public-sans",
      }}
      className="absolute top-[49.5%] left-0 w-full text-white text-sm lg:text-[20px] 2xl:text-[clamp(10px,0.6vw,20px)] font-light 2xl:px-[2.5vw] 3xl:px-[5vw]"
    >
      <div className="flex flex-col justify-between w-full px-6   sm:flex-row">
        <div className="tracking-tight uppercase">
          <Title />
        </div>

        <div className="flex sm:flex-row flex-col  text-[clamp(10px,0.6vw,25px)] gap-x-14 tracking-[0.5] sm:mt-0 mt-6 ">
          <h1 className="md:max-w-105 sm:w-[40vw] md:w-[30vw] lg:w-[20vw] 2xl:max-w-200 leading-loose [&>*+*]:mt-[clamp(0px,10vh,100px)] 2xl:[&>*+*]:mt-[clamp(0px,8vh,140px)]">
            <div className="h-[85px] ">{data.text1}</div>
            <div className="">
              {data.text2}
              <div>
                <p className="flex w-fit  mt-10  items-center ">
                  <CapabilitiesLink link={data.link5}></CapabilitiesLink>
                </p>
              </div>
            </div>
          </h1>

          <div className="flex flex-col max-w-62.5  leading-loose 2xl:max-w-125 [&>*+*]:mt-[clamp(0px,10vh,100px)]   sm:w-[20vw] md:w-[16vw]  lg:w-[16vw] 2xl:[&>*+*]:mt-[clamp(0px,8vh,140px)]">
            <div className="h-21.25">
              <h1>
                With love from Lagos *{" "}
                <span className="inline-block">
                  <Time />
                </span>{" "}
                GMT +1
                <div>we work with clients worldwide.</div>
              </h1>
              <div className="mt-2 lg:mt-5.5">
                <div className="flex 2xl:gap-x-2 gap-x-1 items-center">
                  {" "}
                  <span className="flex 2xl:gap-x-2 gap-x-1 items-center ">
                    Say{" "}
                    <ArrowRight
                      size={10}
                      className="inline-block group-hover:ml-2 duration-300 2xl:hidden"
                    />
                    <ArrowRight className="2xl:inline-block   duration-300 hidden max-w-6 w-[0.7vw]" />{" "}
                    <span className="inline-block 2xl:h-[1.9em]   3xl:h-[2em] h-[2em] ">
                      <EmailLink></EmailLink>
                    </span>
                  </span>{" "}
                </div>
                or book an{" "}
                <a
                  target="_blank"
                  className="hover:underline"
                  href={data.link6}
                >
                  {" "}
                  intro call with us
                </a>
              </div>
            </div>

            {/*   <a
                    className="underline sm:hidden"
                    href="mailto:hello@anewdraft.com "
                  >
                    hello@anewdraft.com
                  </a>{" "} */}

            <div className="">
              {data && (
                <Links
                  data={{
                    instagram: data.link3,
                    linkedin: data.link4,
                    x: data.link1,
                    behance: data.link2,
                  }}
                ></Links>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderItem;
