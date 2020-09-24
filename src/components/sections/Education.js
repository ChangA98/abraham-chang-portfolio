import React from 'react';
import moment from 'moment';

const Education = ({
    id,
    school,
    startDate,
    endDate,
    fieldOfStudy,
    degree,
    description,
}) => {
    return (
        <section id={id}>
            <h1>{school}</h1>
            <h3>{`${degree} - ${fieldOfStudy}`}</h3>
            <p>{`${moment(startDate).format('MM/DD/YYYY')} - ${moment(endDate).format('MM/DD/YYYY')}`}</p>
            <p>{description}</p>
        </section>
    );
};

export default Education;