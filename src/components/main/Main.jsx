import React from 'react';
import {Form, Title} from "..";
import cn from './Main.module.scss'

export const Main = () => {
    return (
        <div className={cn.main}>
            <Title className={cn.title}>MSI 2020</Title>

            <Title className={cn.action}>
                <span className={cn.greeting}>Hey!</span>
                <br />
                Let’s try to find a joke for you:
            </Title>

            <Form />

            {/*<div id="cardsJoke" className="cards"></div>*/}
        </div>
    );
};
