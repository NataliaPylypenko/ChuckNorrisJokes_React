import React from 'react';
import {Button} from "..";
import cn from './Form.module.scss'
import Input from "./Input";

export const Form = ({submitForm, changeChecked, selectedValue, inputs}) => {
    return (
        <form className={cn.form} onSubmit={submitForm}>
            {inputs && inputs.map(input => (
                <Input key={input.value} changeChecked={changeChecked} selectedValue={selectedValue} input={input} />
            ))}

            <Button>Get a joke</Button>
        </form>
    );
};