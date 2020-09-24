import React from 'react';

const About = ({
    id,
    name,
    location,
    phone,
    email,
    description,
}) => {
    return (
        <section id={id}>
            <h1>{name}</h1>
            <h3>{`${location} | +${phone} | ${email}`}</h3>
            <p>{description}</p>
        </section>
    );
};

export default About;