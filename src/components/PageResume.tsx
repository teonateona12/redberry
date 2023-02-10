import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import email from "../assets/images/email.svg";
import number from "../assets/images/number.svg";
import { EducationData, ExperienceData, PersonalInformation } from "../types";
type ResumeType = {
  data: PersonalInformation;
  experienceData: ExperienceData;
  educationData: EducationData;
  imageDataUri: string;
};
const PageResume: React.FC<ResumeType> = ({
  data,
  experienceData,
  educationData,
  imageDataUri,
}) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="px-20 py-16">
      <img src={imageDataUri} />
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
      {path !== "/personal" && <div className="h-1 my-5 bg-[#C1C1C1]"></div>}

      {experienceData.position !== "" && (
        <div className="flex flex-col mt-5">
          <p className="font-bold text-[#F93B1D]">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</p>
          <p className="text-[#1A1A1A] mt-3 font-bold">
            {experienceData.position}
          </p>
          <p>{experienceData.startTime + " " + experienceData.endTime}</p>
        </div>
      )}
      <p>{experienceData.description}</p>
      {path === "/education" && <div className="h-1 my-5 bg-[#C1C1C1]"></div>}
      {educationData.university !== "" && (
        <div className="flex flex-col mt-5">
          <p className="font-bold text-[#F93B1D]"> ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</p>
          <p className="text-[#1A1A1A] mt-3 font-bold">
            {educationData.university}
          </p>
          <p>{educationData.universityEnd}</p>
        </div>
      )}
      <p>{educationData.educationDesc}</p>
    </div>
  );
};

export default PageResume;
