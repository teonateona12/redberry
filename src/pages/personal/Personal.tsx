import React from "react";
import PageInformation from "../../components/PageInformation";

const Personal = () => {
  return (
    <div className="w-7/12">
      <PageInformation info={{ text: "ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ", number: "1" }} />
      <form className="pl-28 pr-16 flex flex-col gap-6">
        <div className="flex  gap-32">
          <div className="flex flex-col gap-2 w-full">
            <label>სახელი</label>
            <input
              className="px-2 py-3 w-full border-2 border-[#BCBCBC] rounded"
              placeholder="ანზორ"
            ></input>
            <small className="font-light color-[#2E2E2E]">
              მინიმუმ 2 ასო, ქართული ასოები
            </small>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label>გვარი</label>
            <input
              className="px-2 py-3 w-full border-2	border-[#BCBCBC] rounded"
              placeholder="მუმლაძე"
            ></input>
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
          ></input>
        </div>

        <div className="flex flex-col gap-2">
          <label>ელ.ფოსტა</label>
          <input
            className="px-2 py-3 w-full border-2	border-[#BCBCBC] rounded"
            placeholder="anzorr666@redberry.ge"
          ></input>
          <small className="font-light color-[#2E2E2E]">
            მინიმუმ 2 ასო, ქართული ასოები
          </small>
        </div>

        <div className="flex flex-col gap-2">
          <label>მობილურის ნომერი</label>
          <input
            className="px-2 py-3 w-full border-2	border-[#BCBCBC] rounded"
            placeholder="+995 551 12 34 56"
          ></input>
          <small className="font-light color-[#2E2E2E]">
            უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
          </small>
        </div>
        <div className="flex justify-end mt-24">
          <button className="bg-[#6B40E3] px-3 py-2 text-white rounded">
            ᲨᲔᲛᲓᲔᲒᲘ
          </button>
        </div>
      </form>
    </div>
  );
};
export default Personal;
