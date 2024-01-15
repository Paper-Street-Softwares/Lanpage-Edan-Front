import React from "react";
import PropTypes from "prop-types";
import "../../style/css/componentsStyle/testimonial.css";

const Testimonial = ({ author, text, company }) => {
  Testimonial.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
  };

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
