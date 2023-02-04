import React from "react";
import icon from "../assets/images/icon.svg";

const PageInformation = ({ info }: any) => {
  return (
    <div>
      <div className="flex my-10 mx-14">
        <img src={icon} />
        <div className="ml-10 w-full">
          <div className="flex justify-between">
            <h1 className="text-2xl	font-bold">{info.text}</h1>
            <p className="text-xl">{`${info.number}/3`}</p>
          </div>
          <div className="border-[#1A1A1A] border-2	mt-4"></div>
        </div>
      </div>
    </div>
  );
};
export default PageInformation;
