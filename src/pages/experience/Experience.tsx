import PageInformation from "../../components/PageInformation";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import error from "../../assets/images/error.svg";
import succes from "../../assets/images/succes.svg";
import {
  EducationData,
  ExperienceData,
  ExperienceDataKey,
  PersonalInformation,
} from "../../types";
import PageResume from "../../components/PageResume";
import { experienceScheme } from "../../schemas/experienseScema";
import { useNavigate } from "react-router-dom";
interface ExperienseTypes {
  setData: React.Dispatch<React.SetStateAction<PersonalInformation>>;
  data: PersonalInformation;
  experienceData: ExperienceData[];
  educationData: EducationData[];
  setEducationData: React.Dispatch<React.SetStateAction<EducationData[]>>;
  setExperienceData: React.Dispatch<React.SetStateAction<ExperienceData[]>>;
  imageDataUri: string;
  setImageDataUri: React.Dispatch<React.SetStateAction<string>>;
}
const Experience: React.FC<ExperienseTypes> = ({
  setData,
  data,
  experienceData,
  educationData,
  setEducationData,
  setExperienceData,
  imageDataUri,
  setImageDataUri,
}) => {
  const navigate = useNavigate();
  const [click, setClick] = useState<boolean>(false);
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<{ experienceData: ExperienceData[] }>({
    resolver: zodResolver(experienceScheme),
    defaultValues: {
      experienceData,
    },
  });

  const clickButton = () => {
    setClick(true);
  };

  const onSubmit: SubmitHandler<{ experienceData: ExperienceData[] }> = () => {
    navigate("/education");
  };

  useEffect(() => {
    const getItem = localStorage.getItem("ExperienceData" || "");
    if (getItem) {
      const parse = JSON.parse(getItem);
      setExperienceData(parse);
    }
  }, []);

  const moreExperience = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setExperienceData([
      ...experienceData,
      {
        position: "",
        description: "",
        employer: "",
        startTime: "",
        endTime: "",
      },
    ]);
  };
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    property: ExperienceDataKey
  ) => {
    const clone = [...experienceData];
    clone[index][property] = e.target.value;
    setValue("experienceData", clone);
    setExperienceData(clone);
    localStorage.setItem("ExperienceData", JSON.stringify(experienceData));
  };
  return (
    <div className="flex">
      <div className="w-7/12">
        <PageInformation
          info={{ text: "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ", number: "2" }}
          setData={setData}
          setExperienceData={setExperienceData}
          setEducationData={setEducationData}
          setImageDataUri={setImageDataUri}
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="pl-28 pr-16 flex flex-col gap-6"
        >
          {experienceData.map((item, index) => (
            <div>
              <div className="flex flex-col gap-2">
                <label
                  className={`${
                    errors.experienceData ? "text-[#EF5050]" : "text-[#000000]"
                  }`}
                >
                  თანამდებობა
                </label>

                <div className="flex relative ">
                  <input
                    className="px-2 py-3 w-full border-2	border-[#BCBCBC] rounded"
                    placeholder="დეველოპერი, დიზაინერი, ა.შ."
                    onChange={(e) => changeHandler(e, index, "position")}
                  ></input>
                  <div className="items-center flex">
                    {!errors.experienceData && click && (
                      <img className="absolute right-2" src={succes} />
                    )}
                  </div>

                  {<img src={errors.experienceData && `${error}`} />}
                </div>
                <small className="font-light color-[#2E2E2E]">
                  მინიმუმ 2 სიმბოლო
                </small>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className={`${
                    errors.experienceData ? "text-[#EF5050]" : "text-[#000000]"
                  }`}
                >
                  დამსაქმებელი
                </label>

                <div className="flex relative ">
                  <input
                    className="px-2 py-3 w-full border-2	border-[#BCBCBC] rounded"
                    placeholder="დამსაქმებელი"
                    onChange={(e) => changeHandler(e, index, "employer")}
                  ></input>
                  <div className="items-center flex">
                    {!errors.experienceData && click && (
                      <img className="absolute right-2" src={succes} />
                    )}
                  </div>

                  {<img src={errors.experienceData && `${error}`} />}
                </div>
                <small className="font-light color-[#2E2E2E]">
                  მინიმუმ 2 სიმბოლო
                </small>
              </div>

              <div className="flex  gap-10">
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex">
                    <div>
                      <label>დაწყების რიცხვი</label>
                      <input
                        type="date"
                        className="px-2 py-3 w-full border-2 border-[#BCBCBC] rounded"
                        onChange={(e) => changeHandler(e, index, "startTime")}
                      ></input>
                    </div>
                    {<img src={errors.experienceData && `${error}`} />}
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <div className="flex">
                    <div>
                      <label>დამთავრების რიცხვი</label>
                      <input
                        type="date"
                        className="px-2 py-3 w-full border-2	border-[#BCBCBC] rounded"
                        onChange={(e) => changeHandler(e, index, "endTime")}
                      ></input>
                    </div>
                    {<img src={errors.experienceData && `${error}`} />}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className={`${
                    errors.experienceData ? "text-[#EF5050]" : "text-[#000000]"
                  }`}
                >
                  აღწერა
                </label>

                <div className="flex relative ">
                  <input
                    className="w-full pl-2 pt-2 pb-24 border-2 border-[#BCBCBC] rounded"
                    placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                    onChange={(e) => changeHandler(e, index, "description")}
                  ></input>
                  <div className="items-center flex">
                    {!errors.experienceData && click && (
                      <img className="absolute right-2" src={succes} />
                    )}
                  </div>

                  {<img src={errors.experienceData && `${error}`} />}
                </div>
              </div>

              <div className="h-1 my-10 bg-[#C1C1C1]"></div>
            </div>
          ))}
          <div>
            <button
              className="bg-[#62A1EB] rounded px-4 py-3 text-white"
              onClick={(e) => {
                moreExperience(e);
              }}
            >
              მეტი გამოცდილების დამატება
            </button>
          </div>

          <div className="flex justify-between mt-24">
            <button
              onClick={() => navigate("/personal")}
              className="bg-[#6B40E3] px-7 py-3 text-white rounded"
            >
              ᲣᲙᲐᲜ
            </button>

            <button
              onClick={clickButton}
              className="bg-[#6B40E3] px-7 py-3 text-white rounded"
            >
              ᲨᲔᲛᲓᲔᲒᲘ
            </button>
          </div>
        </form>
      </div>
      <PageResume
        data={data}
        experienceData={experienceData}
        educationData={educationData}
        imageDataUri={imageDataUri}
      />
    </div>
  );
};

export default Experience;
