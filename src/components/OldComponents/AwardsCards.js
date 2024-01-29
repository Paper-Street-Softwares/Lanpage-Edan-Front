import React from "react";
import PropTypes from "prop-types";

const AwardCard = ({ title, year, description }) => {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{`Ano: ${year}`}</p>
      <p>{description}</p>
    </div>
  );
};

AwardCard.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default AwardCard;
