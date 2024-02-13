import React from 'react';
import cn from "./Form.module.scss";

const Input = ({changeChecked, selectedValue, input}) => {
    return (
        <div className={cn['form-check']}>
            <label>
                <input
                    type="radio"
                    name="jokeType"
                    value={input.value}
                    checked={selectedValue === input.value}
                    onChange={() => changeChecked(input)}
                    className={cn['form-check-input']}
                />
                {input.labelName}
            </label>
        </div>
    );
};

export default Input;