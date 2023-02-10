import PageInformation from "../../components/PageInformation";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import error from "../../assets/images/error.svg";
import succes from "../../assets/images/succes.svg";
import PageResume from "../../components/PageResume";
import { experienceScheme } from "../../schemas/experienseScema";
import { useNavigate } from "react-router-dom";
import {
  EducationData,
  ExperienceData,
  PersonalInformation,
} from "../../types";
import { educationScheme } from "../../schemas/educationSchema";
type educationData = {
  setData: React.Dispatch<React.SetStateAction<PersonalInformation>>;
  data: PersonalInformation;
  experienceData: ExperienceData;
  educationData: EducationData;
  setEducationData: React.Dispatch<React.SetStateAction<EducationData>>;
  setExperienceData: React.Dispatch<React.SetStateAction<ExperienceData>>;
  imageDataUri: string;
  setImageDataUri: React.Dispatch<React.SetStateAction<string>>;
};
const Education: React.FC<educationData> = ({
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
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<EducationData>({
    resolver: zodResolver(educationScheme),
  });

  const saveData = () => {
    const values: EducationData = getValues();
    setEducationData(values);
    localStorage.setItem("EducationData", JSON.stringify(values));
  };
  const clickButton = () => {
    setClick(true);
  };
  const onSubmit: SubmitHandler<EducationData> = (data) => {
    navigate("/resume");
  };

  useEffect(() => {
    const getItem = localStorage.getItem("EducationData" || "");
    if (getItem) {
      const parse = JSON.parse(getItem);
      setEducationData(parse);
      setValue("university", parse.university);
      setValue("degree", parse.degree);
      setValue("universityEnd", parse.universityEnd);
      setValue("educationDesc", parse.educationDesc);
    }
  }, []);
  return (
    <div className="flex">
      <div className="w-7/12">
        <PageInformation
          info={{ text: "ᲒᲐᲜᲐᲗᲚᲔᲑᲐ", number: "3" }}
          setData={setData}
          setExperienceData={setExperienceData}
          setEducationData={setEducationData}
          setImageDataUri={setImageDataUri}
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="pl-28 pr-16 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label
              className={`${
                errors.university ? "text-[#EF5050]" : "text-[#000000]"
              }`}
            >
              სასწავლებელი
            </label>
            <div className="flex relative ">
              <input
                className="px-2 py-3 w-full border-2	border-[#BCBCBC] rounded"
                placeholder="სასწავლებელი"
                {...register("university", {
                  onChange: () => saveData(),
                })}
              ></input>
              <div className="items-center flex">
                {!errors.university && click && (
                  <img className="absolute right-2" src={succes} />
                )}
              </div>

              {<img src={errors.university && `${error}`} />}
            </div>
            <small className="font-light color-[#2E2E2E]">
              მინიმუმ 2 სიმბოლო
            </small>
          </div>

          <div className="flex  gap-10">
            <div className="flex flex-col gap-2 w-full">
              <label
                className={`${
                  errors.degree ? "text-[#EF5050]" : "text-[#000000]"
                }`}
              >
                ხარისხი
              </label>
              <div className="flex relative ">
                <select
                  className="px-2 py-3 w-full border-2 border-[#BCBCBC] rounded"
                  placeholder="აირჩიეთ ხარისხი"
                  {...register("degree", {
                    onChange: () => saveData(),
                  })}
                >
                  <option value="">აირჩიეთ ხარისხი</option>
                  <option value="საშუალო სკოლის დიპლომი">
                    საშუალო სკოლის დიპლომი
                  </option>
                  <option value="ზოგადსაგანმანათლებლო დიპლომი">
                    ზოგადსაგანმანათლებლო დიპლომი
                  </option>
                  <option value="ბაკალავრი">ბაკალავრი</option>
                  <option value="მაგისტრი">მაგისტრი</option>
                  <option value="დოქტორი">დოქტორი</option>
                  <option value="ასოცირებული ხარისხი">
                    ასოცირებული ხარისხი
                  </option>
                  <option value="სტუდენტი">სტუდენტი</option>
                  <option value="კოლეჯი (ხარისხის გარეშე)">
                    კოლეჯი (ხარისხის გარეშე)
                  </option>
                  <option value="სხვა">სხვა</option>
                </select>

                {<img src={errors.degree && `${error}`} />}
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label
                className={`${
                  errors.universityEnd ? "text-[#EF5050]" : "text-[#000000]"
                }`}
              >
                დამთავრების რიცხვი
              </label>

              <div className="flex relative ">
                <input
                  className="px-2 py-3 w-full border-2	border-[#BCBCBC] rounded"
                  type="date"
                  {...register("universityEnd", {
                    onChange: () => saveData(),
                  })}
                ></input>

                {<img src={errors.universityEnd && `${error}`} />}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              className={`${
                errors.educationDesc ? "text-[#EF5050]" : "text-[#000000]"
              }`}
            >
              აღწერა
            </label>

            <div className="flex relative ">
              <input
                className="w-full pl-2 pt-2 pb-24 border-2 border-[#BCBCBC] rounded"
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                {...register("educationDesc", {
                  onChange: () => saveData(),
                })}
              ></input>
              <div className="items-center flex">
                {!errors.educationDesc && click && (
                  <img className="absolute right-2" src={succes} />
                )}
              </div>

              {<img src={errors.educationDesc && `${error}`} />}
            </div>
          </div>

          <div className="h-1 my-10 bg-[#C1C1C1]"></div>

          <div>
            <button className="bg-[#62A1EB] rounded px-4 py-3 text-white">
              მეტი გამოცდილების დამატება
            </button>
          </div>

          <div className="flex justify-between mt-24">
            <button
              onClick={() => navigate("/experience")}
              className="bg-[#6B40E3] px-7 py-3 text-white rounded"
            >
              ᲣᲙᲐᲜ
            </button>
            <button
              onClick={clickButton}
              className="bg-[#6B40E3] px-7 py-3 text-white rounded"
            >
              ᲓᲐᲡᲠᲣᲚᲔᲑᲐ
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
export default Education;
