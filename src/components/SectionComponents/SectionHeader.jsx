import MotionDivLeftToRight from "./MotionDivLeftToRight";
import MotionDivRightToLeft from "./MotionDivRightToLeft";

export default function SectionHeader(props) {
  const sectionHeaderTitleFirst = props.sectionHeaderTitleFirst;
  const sectionHeaderTitleSecond = props.sectionHeaderTitleSecond;
  const sectionHeaderDescription = props.sectionHeaderDescription;

  return (
    <div className="flex flex-col pt-3 pb-3 mt-6 mb-3">
      <div className="w-[79%] flex flex-col justify-center font-poppins text-title1 phone1:text-title2 phone3:text-title5 text-center font-bold ">
        <MotionDivLeftToRight>{sectionHeaderTitleFirst}</MotionDivLeftToRight>
      </div>
      <div className="w-[79%] flex flex-col justify-center font-poppins text-primary text-title1 phone1:text-title2 phone3:text-title5 text-center font-bold ">
        <MotionDivRightToLeft>{sectionHeaderTitleSecond}</MotionDivRightToLeft>
      </div>
      <div className="w-full bg-neutral-200"></div>
      <div className="w-[79%] text-quaternary font-poppins text-paragraph3 phone3:text-paragraph4 text-center">
        <MotionDivLeftToRight>{sectionHeaderDescription}</MotionDivLeftToRight>
      </div>
    </div>
  );
}
