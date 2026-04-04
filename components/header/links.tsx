const Links = ({
  data,
}: {
  data: {
    instagram: string;
    linkedin: string;
    x: string;
    behance: string;
  };
}) => {
  const links = [
    {
      name: "Instagram",
      link: data ? data.instagram : "/",
    },
    {
      name: "LinkedIn",
      link: data ? data.linkedin : "/",
    },
    {
      name: "X",
      link: data ? data.x : "/",
    },
    {
      name: "Behance",
      link: data ? data.behance : "/",
    },
  ];
  return (
    <div className="flex flex-col gap-y-1 sm:gap-y-default leading-normal">
      {links.map((item, index) => {
        return (
          <a key={index} href={item.link} className="hover:underline">
            {item.name}
          </a>
        );
      })}
    </div>
  );
};

export default Links;
