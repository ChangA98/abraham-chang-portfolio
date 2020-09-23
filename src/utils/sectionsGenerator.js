import React from 'react';

export default function sectionsGenerator(sections) {
    return sections.map(section => {
        const typename = section.__typename;
        const sectionType = typename.replace('DatoCms', '');
        const Component = require(`../components/sections/${sectionType}`).default;
        return <Component key={section?.id} {...section} />;
    });
}