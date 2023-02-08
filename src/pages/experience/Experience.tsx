import PageInformation from "../../components/PageInformation";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import error from "../../assets/images/error.svg";
import succes from "../../assets/images/succes.svg";
import { ExperienceData, PersonalInformation } from "../../types";
import PageResume from "../../components/PageResume";
import { experienceScheme } from "../../schemas/experienseScema";
import { useNavigate } from "react-router-dom";
interface ExperienseTypes {
  setExperienceData: React.Dispatch<React.SetStateAction<ExperienceData>>;
  experienceData: ExperienceData;
  data: PersonalInformation;
}
const Experience: React.FC<ExperienseTypes> = ({
  data,
  setExperienceData,
  experienceData,
}) => {
  const navigate = useNavigate();
  const [click, setClick] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<ExperienceData>({
    resolver: zodResolver(experienceScheme),
  });
  const saveData = () => {
    const values: ExperienceData = getValues();
    setExperienceData(values);
    localStorage.setItem("ExperienceData", JSON.stringify(values));
  };
  const clickButton = () => {
    setClick(true);
  };
  const onSubmit: SubmitHandler<ExperienceData> = (data) => {
    navigate("/education");
  };

  useEffect(() => {
    const getItem = localStorage.getItem("ExperienceData" || "");
    if (getItem) {
      const parse = JSON.parse(getItem);
      setExperienceData(parse);
      setValue("position", parse.position);
      setValue("employer", parse.employer);
      setValue("startTime", parse.startTime);
      setValue("endTime", parse.endTime);
      setValue("description", parse.description);
    }
  }, []);
  return (
    <div className="flex">
      <div className="w-7/12">
        <PageInformation info={{ text: "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ", number: "2" }} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="pl-28 pr-16 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label
              className={`${
                errors.position ? "text-[#EF5050]" : "text-[#000000]"
              }`}
            >
              თანამდებობა
            </label>

            <div className="flex relative ">
              <input
                className="px-2 py-3 w-full border-2	border-[#BCBCBC] rounded"
                placeholder="დეველოპერი, დიზაინერი, ა.შ."
                {...register("position", {
                  onChange: () => saveData(),
                })}
              ></input>
              <div className="items-center flex">
                {!errors.position && click && (
                  <img className="absolute right-2" src={succes} />
                )}
              </div>

              {<img src={errors.position && `${error}`} />}
            </div>
            <small className="font-light color-[#2E2E2E]">
              მინიმუმ 2 სიმბოლო
            </small>
          </div>

          <div className="flex flex-col gap-2">
            <label
              className={`${
                errors.employer ? "text-[#EF5050]" : "text-[#000000]"
              }`}
            >
              დამსაქმებელი
            </label>

            <div className="flex relative ">
              <input
                className="px-2 py-3 w-full border-2	border-[#BCBCBC] rounded"
                placeholder="დამსაქმებელი"
                {...register("employer", {
                  onChange: () => saveData(),
                })}
              ></input>
              <div className="items-center flex">
                {!errors.employer && click && (
                  <img className="absolute right-2" src={succes} />
                )}
              </div>

              {<img src={errors.employer && `${error}`} />}
            </div>
            <small className="font-light color-[#2E2E2E]">
              მინიმუმ 2 სიმბოლო
            </small>
          </div>

          <div className="flex  gap-10">
            <div className="flex flex-col gap-2 w-full">
              <label>დაწყების რიცხვი</label>
              <input
                type="date"
                className="px-2 py-3 w-full border-2 border-[#BCBCBC] rounded"
                {...register("startTime", {
                  onChange: () => saveData(),
                })}
              ></input>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label>დამთავრების რიცხვი</label>
              <input
                type="date"
                className="px-2 py-3 w-full border-2	border-[#BCBCBC] rounded"
                {...register("endTime", {
                  onChange: () => saveData(),
                })}
              ></input>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              className={`${
                errors.description ? "text-[#EF5050]" : "text-[#000000]"
              }`}
            >
              აღწერა
            </label>

            <div className="flex relative ">
              <input
                className="w-full pl-2 pt-2 pb-24 border-2 border-[#BCBCBC] rounded"
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                {...register("description", {
                  onChange: () => saveData(),
                })}
              ></input>
              <div className="items-center flex">
                {!errors.description && click && (
                  <img className="absolute right-2" src={succes} />
                )}
              </div>

              {<img src={errors.description && `${error}`} />}
            </div>
          </div>

          <div className="h-1 my-10 bg-[#C1C1C1]"></div>

          <div>
            <button className="bg-[#62A1EB] rounded px-4 py-3 text-white">
              მეტი გამოცდილების დამატება
            </button>
          </div>

          <div className="flex justify-between mt-24">
            <button className="bg-[#6B40E3] px-7 py-3 text-white rounded">
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
      <PageResume data={data} experienceData={experienceData} />
    </div>
  );
};

export default Experience;
