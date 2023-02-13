import PageInformation from "../../components/PageInformation";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import error from "../../assets/images/error.svg";
import succes from "../../assets/images/succes.svg";
import PageResume from "../../components/PageResume";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  EducationData,
  ExperienceData,
  PersonalInformation,
} from "../../types";
import { educationScheme } from "../../schemas/educationSchema";
type educationData = {
  setData: React.Dispatch<React.SetStateAction<PersonalInformation>>;
  data: PersonalInformation;
  experienceData: ExperienceData[];
  educationData: EducationData[];
  setEducationData: React.Dispatch<React.SetStateAction<EducationData[]>>;
  setExperienceData: React.Dispatch<React.SetStateAction<ExperienceData[]>>;
  imageDataUri: string;
  setImageDataUri: React.Dispatch<React.SetStateAction<string>>;
  setResume: any;
  degree: any;
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
  setResume,
  degree,
}) => {
  const navigate = useNavigate();
  const [click, setClick] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<{ educationData: EducationData[] }>({
    resolver: zodResolver(educationScheme),
  });

  function changeImageToFile(dataurl: any, filename: string) {
    if (data.image !== null) {
      let arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    }
  }
  const clickButton = () => {
    setClick(true);
  };

  const onSubmit: SubmitHandler<{
    educationData: EducationData[];
  }> = async () => {
    const img =
      typeof imageDataUri === "string"
        ? changeImageToFile(imageDataUri, "image.png") || ""
        : imageDataUri;
    const formData = new FormData();
    formData.append("name", data.firstName);
    formData.append("surname", data.lastName);
    formData.append("email", data.email);
    formData.append("phone_number", data.number);
    formData.append("image", img);
    educationData.forEach((item, index) => {
      formData.append(`educations[${index}][institute]`, item.university);
      formData.append(`educations[${index}][degree_id]`, item.degree);
      formData.append(`educations[${index}][due_date]`, item.universityEnd);
      formData.append(`educations[${index}][description]`, item.educationDesc);
    });
    experienceData.forEach((item, index) => {
      formData.append(`experiences[${index}][description]`, item.description);
      formData.append(`experiences[${index}][employer]`, item.employer);
      formData.append(`experiences[${index}][due_date]`, item.endTime);
      formData.append(`experiences[${index}][position]`, item.position);
      formData.append(`experiences[${index}][start_date]`, item.startTime);
    });

    if (data.about) {
      formData.append("about_me", data.about);
    }

    try {
      const res = await axios.post(
        "https://resume.redberryinternship.ge/api/cvs",
        formData
      );
      setResume(res.data);
    } catch (error) {
      console.log(error);
    }
    navigate("/resume");
  };

  useEffect(() => {
    const getItem = localStorage.getItem("EducationData" || "");
    if (getItem) {
      const parse = JSON.parse(getItem);
      setEducationData(parse);
    }
  }, []);
  const universityFunc = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const clone = [...educationData];
    clone[index].university = e.target.value;
    setValue("educationData", clone);
    setEducationData(clone);
    localStorage.setItem("EducationData", JSON.stringify(educationData));
  };

  const degreeFunc = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const clone = [...educationData];
    clone[index].degree = +e.target.value;
    setValue("educationData", clone);
    setEducationData(clone);
    localStorage.setItem("EducationData", JSON.stringify(educationData));
  };

  const educationDescFunc = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const clone = [...educationData];
    clone[index].educationDesc = e.target.value;
    setValue("educationData", clone);
    setEducationData(clone);
    localStorage.setItem("EducationData", JSON.stringify(educationData));
  };
  const universityEndFunc = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const clone = [...educationData];
    clone[index].universityEnd = e.target.value;
    setValue("educationData", clone);
    setEducationData(clone);
    localStorage.setItem("EducationData", JSON.stringify(educationData));
  };
  const moreEducation = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setEducationData([
      ...educationData,
      {
        university: "",
        degree: "",
        universityEnd: "",
        educationDesc: "",
      },
    ]);
  };
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
          {educationData.map((item, index) => (
            <div>
              <div className="flex flex-col gap-2">
                <label
                  className={`${
                    errors.educationData ? "text-[#EF5050]" : "text-[#000000]"
                  }`}
                >
                  სასწავლებელი
                </label>
                <div className="flex relative ">
                  <input
                    className="px-2 py-3 w-full border-2	border-[#BCBCBC] rounded"
                    placeholder="სასწავლებელი"
                    onChange={(e) => universityFunc(e, index)}
                  ></input>
                  <div className="items-center flex">
                    {!errors.educationData && click && (
                      <img className="absolute right-2" src={succes} />
                    )}
                  </div>

                  {<img src={errors.educationData && `${error}`} />}
                </div>
                <small className="font-light color-[#2E2E2E]">
                  მინიმუმ 2 სიმბოლო
                </small>
              </div>
              <div className="flex  gap-10">
                <div className="flex flex-col gap-2 w-full">
                  <label
                    className={`${
                      errors.educationData ? "text-[#EF5050]" : "text-[#000000]"
                    }`}
                  >
                    ხარისხი
                  </label>
                  <div className="flex relative ">
                    <select
                      className="px-2 py-3 w-full border-2 border-[#BCBCBC] rounded"
                      placeholder="აირჩიეთ ხარისხი"
                      onChange={(e) => degreeFunc(e, index)}
                    >
                      <option>აირჩიეთ ხარისხი</option>
                      {degree?.map((index: any, deg: any) => (
                        <option value={index.id}>{index.title}</option>
                      ))}
                    </select>

                    {<img src={errors.educationData && `${error}`} />}
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label
                    className={`${
                      errors.educationData ? "text-[#EF5050]" : "text-[#000000]"
                    }`}
                  >
                    დამთავრების რიცხვი
                  </label>

                  <div className="flex relative ">
                    <input
                      className="px-2 py-3 w-full border-2	border-[#BCBCBC] rounded"
                      type="date"
                      onChange={(e) => universityEndFunc(e, index)}
                    ></input>

                    {<img src={errors.educationData && `${error}`} />}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className={`${
                    errors.educationData ? "text-[#EF5050]" : "text-[#000000]"
                  }`}
                >
                  აღწერა
                </label>

                <div className="flex relative ">
                  <input
                    className="w-full pl-2 pt-2 pb-24 border-2 border-[#BCBCBC] rounded"
                    placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                    onChange={(e) => educationDescFunc(e, index)}
                  ></input>
                  <div className="items-center flex">
                    {!errors.educationData && click && (
                      <img className="absolute right-2" src={succes} />
                    )}
                  </div>

                  {<img src={errors.educationData && `${error}`} />}
                </div>
              </div>
              <div className="h-1 my-10 bg-[#C1C1C1]"></div>
            </div>
          ))}

          <div>
            <button
              onClick={(e) => moreEducation(e)}
              className="bg-[#62A1EB] rounded px-4 py-3 text-white"
            >
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
