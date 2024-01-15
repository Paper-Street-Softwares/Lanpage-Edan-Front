import React from "react";
import PropTypes from "prop-types";
import Testimonial from "./Testimonial";

const TestimonialsList = ({ testimonials }) => {
  testimonials.PropTypes = {
    testimonials: PropTypes.string.isRequired,
  };
  return (
    <div className="testimonials-list">
      {testimonials.map((testimonial) => (
        <Testimonial
          key={testimonial.id}
          author={testimonial.author}
          text={testimonial.text}
          company={testimonial.company}
        />
      ))}
    </div>
  );
};

export default TestimonialsList;
