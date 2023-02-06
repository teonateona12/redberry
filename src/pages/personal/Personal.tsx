import React, { useState } from "react";
import PageInformation from "../../components/PageInformation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import error from "../../assets/images/error.svg";
import succes from "../../assets/images/succes.svg";

const validationSchema = z.object({
  firstName: z
    .string()
    .min(2)
    .regex(/^[ა-ჰ]+$/g),
  lastName: z
    .string()
    .min(2)
    .regex(/^[ა-ჰ]+$/g),
  email: z.string().endsWith("@redberry.ge"),
  number: z
    .string()
    .min(2)
    .regex(/^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/),
  about: z.string().optional(),
});
type ValidationSchema = z.infer<typeof validationSchema>;

const Personal = () => {
  const [click, setClick] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });
  const clickButton = () => {
    setClick(true);
    console.log(click);
  };
  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-7/12">
      <PageInformation info={{ text: "ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ", number: "1" }} />
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
                className={`pl-2 pr-10 py-3 flex  w-full border-2 ${
                  errors.firstName ? "border-[#EF5050]" : "border-[#BCBCBC]"
                }	 rounded`}
                placeholder="ანზორ"
                {...register("firstName")}
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
                {...register("lastName")}
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
          <p>პირადი ფოტოს ატვირთვა</p>
          <input
            className="file:bg-[#0E80BF] file:border-0 file:px-4 file:rounded file:text-white"
            type="file"
            placeholder="ატვირთვა"
          ></input>
        </div>

        <div className="flex flex-col gap-2">
          <label>ჩემ შესახებ (არასავალდებულო)</label>
          <input
            className="w-full pl-2 pt-2 pb-28 border-2 border-[#BCBCBC] rounded"
            placeholder="ზოგადი ინფო შენ შესახებ"
            {...register("about")}
          ></input>
        </div>

        <div className="flex flex-col gap-2">
          <label
            className={`${errors.email ? "text-[#EF5050]" : "text-[#000000]"}`}
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
              {...register("email")}
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
            className={`${errors.number ? "text-[#EF5050]" : "text-[#000000]"}`}
          >
            მობილურის ნომერი
          </label>
          <div className="flex relative">
            <input
              className={`px-2 py-3  w-full border-2 ${
                errors.number ? "border-[#EF5050]" : "border-[#BCBCBC]"
              }	 rounded`}
              placeholder="+995 551 12 34 56"
              {...register("number")}
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
  );
};
export default Personal;
