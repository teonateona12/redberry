import React, { useState } from "react";
import email from "../assets/images/email.svg";
import number from "../assets/images/number.svg";
import { PersonalInformation } from "../types";
import { useEffect } from "react";
type ResumeType = {
  data: PersonalInformation;
};
const PageResume: React.FC<ResumeType> = ({ data }) => {
  return (
    <div className="px-20 py-16">
      <h1 className="text-[#F93B1D] text-3xl font-bold">
        {data.firstName + " " + data.lastName}
      </h1>
      {data?.email !== "" && (
        <div className="flex gap-2 mt-5">
          <img src={email} />
          <p>{data.email}</p>
        </div>
      )}
      {data.number !== "" && (
        <div className="flex gap-2">
          <img src={number} />
          <p>{data.number}</p>
        </div>
      )}
      {data.about !== "" && (
        <div className="flex flex-col gap-3 mt-5">
          <p className="font-bold text-[#F93B1D]">ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</p>
          <p>{data.about}</p>
        </div>
      )}
    </div>
  );
};

export default PageResume;
