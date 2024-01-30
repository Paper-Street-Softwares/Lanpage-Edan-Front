import React from "react";

export default function SectionHeader(props) {
  const sectionHeaderTitleFirst = props.sectionHeaderTitleFirst;
  const sectionHeaderTitleSecond = props.sectionHeaderTitleSecond;
  const sectionHeaderDescription = props.sectionHeaderDescription;

  return (
    <div className="flex flex-col pt-3 pb-3 mb-3 opacity-0 animate-fade-in">
      <div className="w-[79%] flex flex-col justify-center font-poppins text-2xl text-center font-bold ">
        {sectionHeaderTitleFirst}
      </div>
      <div className="w-[79%] flex flex-col justify-center font-poppins text-lightgreen text-2xl text-center font-bold ">
        {sectionHeaderTitleSecond}
      </div>
      <div className="w-full h-px bg-neutral-200 mt-6 mb-6"></div>
      <div className="w-[79%] text-neutral-500 font-poppins text-sm text-center">
        {sectionHeaderDescription}
      </div>
    </div>
  );
}
