import Title from "../Title";

const HeaderItem = () => {
  return (
    <div
      style={{
        zIndex: 1,
        fontFamily: "ingram",
        fontSize: "20px",
      }}
      className="absolute top-0 left-0 w-full text-white fontt-in"
    >
      <div className="flex flex-col justify-between w-full px-6 mt-6 sm:flex-row">
        <div className="tracking-tight uppercase">
          <Title />
        </div>

        <div className="flex sm:flex-row flex-col  text-[clamp(10px,0.6vw,25px)] gap-x-14 tracking-[0.5] sm:mt-0 mt-6">
          <h1 className="max-w-[420px] w-[60vw] sm:w-[27vw] 2xl:max-w-[800px] leading-[2]">
            A celebration of the craft of creativity, expression and
            storytelling, and that manifests as studio who's core value offering
            is helping business tell better stories visual, helping business
            engage and communicate.
          </h1>

          <div className="flex flex-col gap-y-8 max-w-[250px]   2xl:max-w-[500px] ">
            <h1>
              based in Lagos, Nigeria; We work
              <div> remotely with clients worldwide.</div>
            </h1>
            <div>
              <div>Collaborate with us</div>
              <a
                className="underline sm:hidden"
                href="mailto:hello@anewdraft.com "
              >
                hello@anewdraft.com
              </a>
              <a
                className="hover:underline hidden sm:block"
                href="mailto:hello@anewdraft.com "
              >
                hello@anewdraft.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderItem;
