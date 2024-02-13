import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionHeader(props) {
  const sectionHeaderTitleFirst = props.sectionHeaderTitleFirst;
  const sectionHeaderTitleSecond = props.sectionHeaderTitleSecond;
  const sectionHeaderDescription = props.sectionHeaderDescription;
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
      transition={{ duration: 1 }}
      className="flex flex-col pt-3 pb-3 mt-6 mb-3"
    >
      <div className="w-[79%] flex flex-col justify-center font-poppins text-title1 phone1:text-title2 phone3:text-title5 text-center font-bold ">
        {sectionHeaderTitleFirst}
      </div>
      <div className="w-[79%] flex flex-col justify-center font-poppins text-primary text-title1 phone1:text-title2 phone3:text-title5 text-center font-bold ">
        {sectionHeaderTitleSecond}
      </div>
      <div className="w-full h-px mt-6 mb-6 bg-neutral-200"></div>
      <div className="w-[79%] text-quaternary font-poppins text-paragraph3 phone3:text-paragraph4 text-center">
        {sectionHeaderDescription}
      </div>
    </motion.div>
  );
}
