import React, {useState} from 'react';
import {Form, Title} from "..";
import cn from './Main.module.scss'

export const Main = () => {
    const inputs = [
        {
            labelName: 'Random Value',
            value: 'random'
        },
        {
            labelName: 'Categories',
            value: 'categories'
        },
        {
            labelName: 'Search',
            value: 'search'
        }
    ];

    const [selectedValue, setSelectedValue] = useState('random');

    const changeChecked = item => {
        setSelectedValue(item.value);
    };

    const submitForm = e => {
        e.preventDefault();
        console.log(selectedValue);
        // get the selected value and send a request to the api
        e.target.reset();
    };

    return (
        <div className={cn.main}>
            <Title style={cn.title}>MSI 2020</Title>

            <Title style={cn.action}>
                <span className={cn.greeting}>Hey!</span>
                <br />
                Let’s try to find a joke for you:
            </Title>

            <Form submitForm={submitForm} changeChecked={changeChecked} selectedValue={selectedValue} inputs={inputs} />
        </div>
    );
};
