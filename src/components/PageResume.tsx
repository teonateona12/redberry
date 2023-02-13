import React from "react";
import { useLocation } from "react-router-dom";
import email from "../assets/images/email.svg";
import number from "../assets/images/number.svg";
import image from "../assets/images/img.png";
import { EducationData, ExperienceData, PersonalInformation } from "../types";
type ResumeType = {
  data: PersonalInformation;
  experienceData: ExperienceData[];
  educationData: EducationData[];
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
    <div className="flex px-20 py-16">
      <div className="w-[50%] relative">
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

        {experienceData?.map(
          (exp) =>
            exp.position && (
              <div>
                <div className="flex flex-col mt-5">
                  <p className="font-bold text-[#F93B1D]">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</p>
                  <p className="text-[#1A1A1A] mt-3 font-bold">
                    {exp.position + ", " + exp.employer}
                  </p>
                  <p>{exp.startTime + " " + exp.endTime}</p>
                </div>
                <p>{exp.description}</p>
              </div>
            )
        )}

        {path === "/education" && <div className="h-1 my-5 bg-[#C1C1C1]"></div>}
        {educationData?.map(
          (edc) =>
            edc.university && (
              <div>
                <div className="flex flex-col mt-5">
                  <p className="font-bold text-[#F93B1D]"> ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</p>
                  <p className="text-[#1A1A1A] mt-3 font-bold">
                    {edc.university + ", " + edc.degree}
                  </p>
                  <p>{edc.universityEnd}</p>
                </div>
                <p>{edc.educationDesc}</p>
              </div>
            )
        )}

        <div className="absolute bottom-0">
          <img src={image} />
        </div>
      </div>
      <div>
        <img
          className="w-[246px] h-[246px] rounded-[126px]"
          src={imageDataUri}
        />
      </div>
    </div>
  );
};

export default PageResume;
