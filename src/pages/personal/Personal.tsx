import React, { useEffect, useState } from "react";
import PageInformation from "../../components/PageInformation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import error from "../../assets/images/error.svg";
import succes from "../../assets/images/succes.svg";
import {
  EducationData,
  ExperienceData,
  PersonalInformation,
} from "../../types";
import PageResume from "../../components/PageResume";
import { personalSchema } from "../../schemas/personalSchema";
import { useNavigate } from "react-router-dom";

interface DataTypes {
  setData: React.Dispatch<React.SetStateAction<PersonalInformation>>;
  data: PersonalInformation;
  experienceData: ExperienceData[];
  educationData: EducationData;
  setEducationData: React.Dispatch<React.SetStateAction<EducationData>>;
  setExperienceData: React.Dispatch<React.SetStateAction<ExperienceData[]>>;
  imageDataUri: string;
  setImageDataUri: React.Dispatch<React.SetStateAction<string>>;
}

const Personal: React.FC<DataTypes> = ({
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
  } = useForm<PersonalInformation>({
    resolver: zodResolver(personalSchema),
  });

  const saveData = () => {
    const values: PersonalInformation = getValues();
    setData(values);
    localStorage.setItem("PersonalData", JSON.stringify(values));
  };

  const clickButton = () => {
    setClick(true);
  };

  useEffect(() => {
    const getItem = localStorage.getItem("PersonalData" || "");
    if (getItem) {
      const parse = JSON.parse(getItem);
      setData(parse);
      setValue("firstName", parse.firstName);
      setValue("lastName", parse.lastName);
      setValue("about", parse.about);
      setValue("email", parse.email);
      setValue("number", parse.number);
    }
  }, []);
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      localStorage.setItem("image", reader.result as string);
      setImageDataUri(reader.result as string);
    };
  };
  const onSubmit: SubmitHandler<PersonalInformation> = () => {
    if (!imageDataUri) {
      return;
    }
    navigate("/experience");
  };
  return (
    <div className="flex">
      <div className="w-7/12">
        <PageInformation
          info={{ text: "ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ", number: "1" }}
          setData={setData}
          setExperienceData={setExperienceData}
          setEducationData={setEducationData}
          setImageDataUri={setImageDataUri}
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="pl-28 pr-16 flex flex-col gap-6"
        >
          <div className="flex gap-10">
            <div className="flex flex-col gap-2 w-full">
              <label
                className={`${
                  errors.firstName ? "text-[#EF5050]" : "text-[#000000]"
                }`}
              >
                სახელი
              </label>
              <div className="flex relative">
                <input
                  type="text"
                  className={`pl-2 pr-10 py-3 flex  w-full border-2 ${
                    errors.firstName ? "border-[#EF5050]" : "border-[#BCBCBC]"
                  }	 rounded`}
                  placeholder="ანზორ"
                  {...register("firstName", {
                    onChange: () => saveData(),
                  })}
                ></input>
                <div className="items-center flex">
                  {!errors.firstName && click && (
                    <img className="absolute right-2" src={succes} />
                  )}
                </div>

                {<img src={errors.firstName && `${error}`} />}
              </div>
              <small className="font-light color-[#2E2E2E]">
                მინიმუმ 2 ასო, ქართული ასოები
              </small>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label
                className={`${
                  errors.lastName ? "text-[#EF5050]" : "text-[#000000]"
                }`}
              >
                გვარი
              </label>
              <div className="flex relative">
                <input
                  className={`pl-2 pr-10 py-3 flex  w-full border-2 ${
                    errors.lastName ? "border-[#EF5050]" : "border-[#BCBCBC]"
                  }	 rounded`}
                  placeholder="მუმლაძე"
                  {...register("lastName", {
                    onChange: () => saveData(),
                  })}
                ></input>
                <div className="items-center flex">
                  {!errors.lastName && click && (
                    <img className="absolute right-2" src={succes} />
                  )}
                </div>

                {<img src={errors.lastName && `${error}`} />}
              </div>
              <small className="font-light color-[#2E2E2E]">
                მინიმუმ 2 ასო, ქართული ასოები
              </small>
            </div>
          </div>

          <div className="flex my-5 gap-5">
            <label
              className={`${
                !imageDataUri && click ? "text-[#EF5050]" : "text-[#000000]"
              }`}
            >
              პირადი ფოტოს ატვირთვა
            </label>
            <label
              htmlFor="files"
              className="bg-[#0E80BF] border-0 px-4 rounded text-white"
            >
              ატვირთვა
            </label>
            <input
              id="files"
              onChange={handleImageUpload}
              className="hidden"
              type="file"
            ></input>
          </div>

          <div className="flex flex-col gap-2">
            <label>ჩემ შესახებ (არასავალდებულო)</label>
            <input
              className="w-full pl-2 pt-2 pb-28 border-2 border-[#BCBCBC] rounded"
              placeholder="ზოგადი ინფო შენ შესახებ"
              {...register("about", {
                onChange: () => saveData(),
              })}
            ></input>
          </div>

          <div className="flex flex-col gap-2">
            <label
              className={`${
                errors.email ? "text-[#EF5050]" : "text-[#000000]"
              }`}
            >
              ელ.ფოსტა
            </label>
            <div className="flex relative ">
              <input
                className={`px-2 py-3 w-full border-2 ${
                  errors.email ? "border-[#EF5050]" : "border-[#BCBCBC]"
                }	 rounded`}
                placeholder="anzorr666@redberry.ge"
                type="email"
                {...register("email", {
                  onChange: () => saveData(),
                })}
              ></input>
              <div className="items-center flex">
                {!errors.email && click && (
                  <img className="absolute right-2" src={succes} />
                )}
              </div>

              {<img src={errors.email && `${error}`} />}
            </div>
            <small className="font-light color-[#2E2E2E]">
              მინიმუმ 2 ასო, ქართული ასოები
            </small>
          </div>

          <div className="flex flex-col gap-2">
            <label
              className={`${
                errors.number ? "text-[#EF5050]" : "text-[#000000]"
              }`}
            >
              მობილურის ნომერი
            </label>
            <div className="flex relative">
              <input
                className={`px-2 py-3  w-full border-2 ${
                  errors.number ? "border-[#EF5050]" : "border-[#BCBCBC]"
                }	 rounded`}
                placeholder="+995 551 12 34 56"
                {...register("number", {
                  onChange: () => saveData(),
                })}
              ></input>
              <div className="items-center flex">
                {!errors.number && click && (
                  <img className="absolute right-2" src={succes} />
                )}
              </div>

              {<img src={errors.number && `${error}`} />}
            </div>
            <small className="font-light color-[#2E2E2E]">
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </small>
          </div>
          <div className="flex justify-end mt-24">
            <button
              onClick={clickButton}
              className="bg-[#6B40E3] px-3 py-2 text-white rounded"
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
export default Personal;
