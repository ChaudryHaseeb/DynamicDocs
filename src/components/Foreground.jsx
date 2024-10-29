import React, { useRef } from "react";
import Card from "./Card";


const Foreground = () => {
  <React />
  const ref = useRef(null)
  
  const Data = [
    {
      desc: "Hello ! My name is Chaudry Haseeb. I am a Software Engineer",
      id: {
        file: "0.8mbs",
        close: false,
      },
      download: "Download Now",
      isOpen: true,
      color: true,
    },
    {
      desc: "Hello ! My name is Chaudry Haseeb. I am a Software Engineer",
      id: {
        file: "0.8mbs",
        close: true,
      },
      download: "Upload",
      isOpen: true,
      color: false,
    },
    {
      desc: "Hello ! My name is Chaudry Haseeb. I am a Software Engineer",
      id: {
        file: "0.8mbs",
        close: false,
      },
      download: "Download Now",
      isOpen: true,
      color: true,
    },
  ];

  return (
    <div ref={ref} className="w-full h-screen fixed z-[3] flex flex-wrap gap-8 m-10">
      {Data.map((item, index) => {
        return <Card key={index} Data={item} refernce={ref} />;
      })}
    </div>
  );
};

export default Foreground;
