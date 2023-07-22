import React from 'react';

const TitleSection = ({header,subHeader}) => {
    return (
        <div>
            <div className="divider text-5xl font-bold"></div>
            <div className="divider text-3xl font-bold">{header}</div>
            <div className="divider text-5xl font-bold">{subHeader}</div>
            <div className="divider text-5xl font-bold"></div>

        </div>
    );
};

export default TitleSection;