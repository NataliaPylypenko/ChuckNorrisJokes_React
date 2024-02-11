import React from 'react';
import {Title} from "..";
import cn from './Side.module.scss'

export const Side = () => {
    return (
        <div className={cn.side}>
            <Title className={cn.title}>Favourite</Title>
            {/*<div id="favoriteCardsJoke" className="cards"></div>*/}
        </div>
    );
};