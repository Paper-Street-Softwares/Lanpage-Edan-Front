import React from "react";
import Testimonial from "./Testimonial";

const TestimonialsList = ({ testimonials }) => {
  return (
    <div className="testimonials-list">
      {testimonials.map((testimonial, index) => (
        <Testimonial
          key={index}
          author={testimonial.author}
          text={testimonial.text}
          company={testimonial.company}
        />
      ))}
    </div>
  );
};

export default TestimonialsList;
