"use client";
import Button from "@/components/button";
import Title from "@/components/Title";
import { useRouter } from "next/navigation";

export default function Intro() {
  const rout = useRouter();

  return (
    <div className="h-[85vh] w-[45vw] m-auto mt-12 flex flex-col items-center justify-between">
      <div className="text-[40px] font-semibold mt-12 h-1/3">
        Pick Some new habits to get started
      </div>
      <div className="flex flex-col  p-10 w-full gap-y-4 h-2/3">
        <div>
          <Title title="RECOMMENDED" className="text-[#D1A28B]" />
        </div>
        <div className="flex flex-wrap gap-6">
          <Title
            title="Exercise"
            className="text-black bg-[#F3EFEE] w-fit px-10 h-[56px] text-center place-content-center rounded-lg"
          />
          <Title
            title="Plan Meals"
            className="text-black bg-[#F3EFEE] w-fit px-10 h-[56px] text-center place-content-center"
          />
          <Title
            title="Stretch for 15mins"
            className="text-black bg-[#F3EFEE] w-fit px-10 h-[56px] text-center place-content-center"
          />
          <Title
            title="Water Plants"
            className="text-black bg-[#F3EFEE] w-fit px-10 h-[56px] text-center place-content-center"
          />
          <Title
            title="Read Books"
            className="text-black bg-[#F3EFEE] w-fit px-10 h-[56px] text-center place-content-center"
          />
        </div>
      </div>
      <Button
        title="Continue"
        className="bg-[black] text-white w-[40%] h-[45px] rounded-lg "
        onClick={() => {
          rout.push("/home");
        }}
      />
    </div>
  );
};
