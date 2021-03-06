import React from 'react';

const Project = ({
    id,
    title,
    description,
    images,
}) => {
    return (
        <section id={id}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div>
                {images.map(({ url, title }) => (
                    <img style={{ width: 100, marginRight: 20 }} src={url} alt={title || 'Prject Image'} />
                ))}
            </div>
        </section>
    );
};

export default Project;