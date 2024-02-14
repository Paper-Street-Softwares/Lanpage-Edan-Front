import React from "react";

export default function SectionHeader(props) {
  const sectionHeaderTitleFirst = props.sectionHeaderTitleFirst;
  const sectionHeaderTitleSecond = props.sectionHeaderTitleSecond;
  const sectionHeaderDescription = props.sectionHeaderDescription;

  return (
    <div className="flex flex-col pt-3 pb-3 mt-6 mb-3 opacity-0 animate-fade-in">
      <div className="w-[79%] flex flex-col justify-center font-poppins text-title1 phone1:text-title2 phone3:text-title5 text-center font-bold ">
        {sectionHeaderTitleFirst}
      </div>
      <div className="w-[79%] flex flex-col justify-center font-poppins text-primary text-title1 phone1:text-title2 phone3:text-title5 text-center font-bold ">
        {sectionHeaderTitleSecond}
      </div>
      <div className="w-full bg-neutral-200"></div>
      <div className="w-[79%] text-quaternary font-poppins text-paragraph3 phone3:text-paragraph4 text-center">
        {sectionHeaderDescription}
      </div>
    </div>
  );
}
