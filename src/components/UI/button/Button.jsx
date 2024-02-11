import React from 'react';
import cn from './Button.module.scss'

export const Button = ({children}) => {
    return (
        <button type="submit" className={cn.btn + ' ' + cn.btnSubmit}>{children}</button>
    );
};