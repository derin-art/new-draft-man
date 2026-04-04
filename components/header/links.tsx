import React from "react";

const Links = () => {
  const links = [
    {
      name: "Instagram",
      link: "",
    },
    {
      name: "LinkedIn",
      link: "",
    },
    {
      name: "X",
      link: "",
    },
    {
      name: "Behance",
      link: "",
    },
  ];
  return (
    <div className="flex flex-col gap-y-1 sm:gap-y-default">
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
