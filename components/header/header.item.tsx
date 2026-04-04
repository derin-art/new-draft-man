import Title from "../Title";
import EmailLink from "./emai.link";
import { ArrowRight } from "lucide-react";
import Links from "./links";
import Time from "./time";

import { HomePageSingletonLinks } from "./header.types";

const HeaderItem = async ({ data }: { data: HomePageSingletonLinks }) => {
  return (
    <div
      style={{
        zIndex: 1,
        fontFamily: "public-sans",
      }}
      className="absolute top-[49.5%] left-0 w-full text-white text-sm lg:text-[20px] 2xl:text-[clamp(10px,0.6vw,20px)]"
    >
      <div className="flex flex-col justify-between w-full px-6 2xl:px-[2vw]  sm:flex-row">
        <div className="tracking-tight uppercase">
          <Title />
        </div>

        <div className="flex sm:flex-row flex-col  text-[clamp(10px,0.6vw,25px)] gap-x-14 tracking-[0.5] sm:mt-0 mt-6">
          <h1 className="md:max-w-105 sm:w-[40vw] md:w-[30vw] lg:w-[20vw] 2xl:max-w-200 leading-loose [&>*+*]:mt-[clamp(0px,10vh,100px)] 2xl:[&>*+*]:mt-[clamp(0px,8vh,140px)]">
            <div className="h-[85px] ">{data.text1}</div>
            <div className="">
              {data.text2}
              <div>
                <a
                  className="flex w-fit group mt-10  items-center hover:underline"
                  href="/"
                >
                  <ArrowRight
                    size={10}
                    className="inline-block mr-2 group-hover:mr-2 duration-300 2xl:hidden"
                  />
                  <ArrowRight className="2xl:inline-block mr-2 group-hover:mr-4 duration-300 hidden max-w-6 w-[0.7vw]" />
                  Our Capabilites{" "}
                </a>
              </div>
            </div>
          </h1>

          <div className="flex flex-col max-w-62.5  leading-loose 2xl:max-w-125 [&>*+*]:mt-[clamp(0px,10vh,100px)]   sm:w-[20vw]  md:w-[14vw]   2xl:[&>*+*]:mt-[clamp(0px,8vh,140px)]">
            <div className="h-[85px]">
              <h1>
                With love from Lagos *{" "}
                <span className="inline-block">
                  <Time />
                </span>{" "}
                GMT +1
                <div>we work with clients worldwide.</div>
              </h1>
              <div className="mt-5.5">
                <span className="flex 2xl:gap-x-2 gap-x-1 items-center">
                  Say{" "}
                  <ArrowRight
                    size={10}
                    className="inline-block group-hover:ml-2 duration-300 2xl:hidden"
                  />
                  <ArrowRight className="2xl:inline-block  group-hover:ml-2 duration-300 hidden max-w-6 w-[0.7vw]" />{" "}
                  <span className="inline-block">
                    <EmailLink></EmailLink>
                  </span>
                </span>
                or book an{" "}
                <a className="underline" href="/">
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
