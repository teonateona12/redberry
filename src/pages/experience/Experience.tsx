import React from "react";
import PageInformation from "../../components/PageInformation";

const Experience = () => {
  return (
    <div className="w-7/12">
      <PageInformation info={{ text: "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ", number: "2" }} />
      <form className="pl-28 pr-16 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label>თანამდებობა</label>
          <input
            className="px-2 py-3 w-full border-2	border-[#BCBCBC] rounded"
            placeholder="დეველოპერი, დიზაინერი, ა.შ."
          ></input>
          <small className="font-light color-[#2E2E2E]">
            მინიმუმ 2 სიმბოლო
          </small>
        </div>

        <div className="flex flex-col gap-2">
          <label>დამსაქმებელი</label>
          <input
            className="px-2 py-3 w-full border-2	border-[#BCBCBC] rounded"
            placeholder="დამსაქმებელი"
          ></input>
          <small className="font-light color-[#2E2E2E]">
            მინიმუმ 2 სიმბოლო
          </small>
        </div>

        <div className="flex  gap-32">
          <div className="flex flex-col gap-2 w-full">
            <label>დაწყების რიცხვი</label>
            <input
              className="px-2 py-3 w-full border-2 border-[#BCBCBC] rounded"
              placeholder=""
            ></input>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label>დამთავრების რიცხვი</label>
            <input
              className="px-2 py-3 w-full border-2	border-[#BCBCBC] rounded"
              placeholder=""
            ></input>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label>აღწერა</label>
          <input
            className="w-full pl-2 pt-2 pb-24 border-2 border-[#BCBCBC] rounded"
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          ></input>
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
          <button className="bg-[#6B40E3] px-7 py-3 text-white rounded">
            ᲨᲔᲛᲓᲔᲒᲘ
          </button>
        </div>
      </form>
    </div>
  );
};

export default Experience;
