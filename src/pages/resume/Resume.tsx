import React, { useState } from "react";
import email from "../../assets/images/email.svg";
import number from "../../assets/images/number.svg";
import icon from "../../assets/images/icon.svg";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/img.png";
import {
  EducationData,
  ExperienceData,
  PersonalInformation,
  ResumeData,
} from "../../types";
type PageResume = {
  setData: React.Dispatch<React.SetStateAction<PersonalInformation>>;
  setEducationData: React.Dispatch<React.SetStateAction<EducationData[]>>;
  setExperienceData: React.Dispatch<React.SetStateAction<ExperienceData[]>>;
  setImageDataUri: React.Dispatch<React.SetStateAction<string>>;
  resume: ResumeData | undefined;
  imageDataUri: string;
};
const Resume: React.FC<PageResume> = ({
  setData,
  setEducationData,
  setExperienceData,
  setImageDataUri,
  resume,
  imageDataUri,
}) => {
  const navigate = useNavigate();
  const [click, setClick] = useState<boolean>(false);
  console.log(resume);

  return (
    <div className="mt-20 relative">
      <img
        className="ml-20"
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
          setEducationData([
            {
              university: "",
              degree: "",
              universityEnd: "",
              educationDesc: "",
            },
          ]);
          setExperienceData([
            {
              position: "",
              description: "",
              employer: "",
              startTime: "",
              endTime: "",
            },
          ]);
          setImageDataUri("");
        }}
        src={icon}
      />
      <div className="border-2 border-black w-[800px] m-auto ">
        <div className="flex px-20 py-16">
          <div className="">
            <h1 className="text-[#F93B1D] text-3xl font-bold">
              {`${resume?.name} ${resume?.surname}`}
            </h1>

            <div className="flex gap-2 mt-5">
              <img src={email} />
              <p>{resume?.email}</p>
            </div>

            <div className="flex gap-2">
              <img src={number} />
              <p>{resume?.phone_number}</p>
            </div>

            <div className="flex flex-col gap-3 mt-5">
              <p className="font-bold text-[#F93B1D]">ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</p>
              <p>{resume?.about_me}</p>
            </div>

            <div className="h-1 my-5 bg-[#C1C1C1]"></div>
            {resume?.experiences.map((exp) => (
              <>
                <div className="flex flex-col mt-5">
                  <p className="font-bold text-[#F93B1D]">{`${exp.position}, ${exp.employer}`}</p>
                  <p className="text-[#1A1A1A] mt-3 font-bold">{`${exp.start_date} ${exp.due_date}`}</p>
                  <p>{exp.description}</p>
                </div>

                <p></p>
              </>
            ))}

            <div className="h-1 my-5 bg-[#C1C1C1]"></div>
            {resume?.educations.map((edc) => (
              <>
                <div className="flex flex-col mt-5">
                  <p className="font-bold text-[#F93B1D]"> ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</p>
                  <p className="text-[#1A1A1A] mt-3 font-bold">{`${edc.institute}, ${edc.degree}`}</p>
                  <p>{edc.due_date}</p>
                </div>

                <p>{edc.description}</p>
              </>
            ))}

            <div className="mt-[70%]">
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
      </div>
      {!click && (
        <div className="succ absolute top-0 right-4 p-[30px] flex">
          <h1>რეზიუმე წარმატებით გაიგზავნა 🎉</h1>
          <p onClick={() => setClick(true)}>X</p>
        </div>
      )}
    </div>
  );
};

export default Resume;
