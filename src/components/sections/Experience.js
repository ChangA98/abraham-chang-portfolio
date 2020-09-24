import React from 'react';
import moment from 'moment';

const Experience = ({
  id,
  company,
  title,
  employmentType,
  location,
  startDate,
  endDate,
  description,
}) => {
  return (
    <section id={id}>
      <h1>{company}</h1>
      <h3>{title}</h3>
      <p>{`${location} - ${employmentType}`}</p>
      <p>{`${moment(startDate).format('MM/DD/YYYY')} - ${moment(endDate).format('MM/DD/YYYY')}`}</p>
      <p>{description}</p>
    </section>
  );
};

export default Experience;