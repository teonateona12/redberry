import React from "react";
import icon from "../assets/images/icon.svg";
import { useNavigate } from "react-router-dom";
import { EducationData, ExperienceData, PersonalInformation } from "../types";
type PageInfoTypes = {
  setData: React.Dispatch<React.SetStateAction<PersonalInformation>>;
  setEducationData: React.Dispatch<React.SetStateAction<EducationData>>;
  setExperienceData: React.Dispatch<React.SetStateAction<ExperienceData>>;
  setImageDataUri: React.Dispatch<React.SetStateAction<string>>;
  info: Info;
};
type Info = {
  text: string;
  number: string;
};
const PageInformation: React.FC<PageInfoTypes> = ({
  info,
  setData,
  setEducationData,
  setExperienceData,
  setImageDataUri,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex my-10 mx-14">
        <img
          onClick={() => {
            navigate("/");
            localStorage.removeItem("PersonalData");
            localStorage.removeItem("ExperienceData");
            localStorage.removeItem("EducationData");
            localStorage.removeItem("image");
            setData({
              firstName: "",
              lastName: "",
              about: "",
              email: "",
              number: "",
              image: null,
            });
            setEducationData({
              university: "",
              degree: "",
              universityEnd: "",
              educationDesc: "",
            });
            setExperienceData({
              position: "",
              description: "",
              employer: "",
              startTime: "",
              endTime: "",
            });
            setImageDataUri("");
          }}
          src={icon}
        />
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
