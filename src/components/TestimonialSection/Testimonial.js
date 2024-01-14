import React from "react";
import "../../style/css/componentsStyle/testimonial.css";

const Testimonial = ({ author, text, company }) => {
  return (
    <div className="wrapper-Testimonial">
      <div className="container-Testimonial">
        <p className="testimonial-text">{text}</p>
        <p className="testimonial-author">{author}</p>
        <p className="testimonial-company">{company}</p>
      </div>
    </div>
  );
};

export default Testimonial;
