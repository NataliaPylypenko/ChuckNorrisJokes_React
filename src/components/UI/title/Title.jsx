import React from 'react';

export const Title = ({style, children}) => {
    return (
        <h2 className={style}>{children}</h2>
    );
};