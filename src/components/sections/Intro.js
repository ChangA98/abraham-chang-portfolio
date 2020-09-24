import React from 'react';

const Intro = ({
    id,
    title,
    excerpt,
    bgImage: {
        url,
        title: imgTitle
    }
}) => {
    return (
        <section id={id}>
            <h1>{title}</h1>
            <p>{excerpt}</p>
            <img style={{ width: 100 }} src={url} alt={imgTitle} />
        </section>
    );
};

export default Intro;