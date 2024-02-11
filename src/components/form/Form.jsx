import React from 'react';
import {Button} from "..";
import cn from './Form.module.scss'

export const Form = () => {
    return (
        <form className={cn.form}>
            <div className={cn.collapsible}>
                <label>
                    {/*<input type="radio" name="jokeType" value="random" checked> Random Value </input>*/}
                </label>
            </div>

            <div className={cn.collapsible}>
                <label>
                    {/*<input type="radio" name="jokeType" value="categories"> Categories </input>*/}
                </label>
            </div>
            <div className={cn.content}>
                {/*<ul id="jokeCategories" className="category-labels"></ul>*/}
            </div>

            <div className={cn.collapsible}>
                <label>
                    {/*<input type="radio" name="jokeType" id="jokeSearch" value="search"> Search </input>*/}
                </label>
            </div>
            <div className={cn.content}>
                {/*<input type="text" className="search-input" placeholder="Free text search..." />*/}
            </div>

            <Button>Get a joke</Button>
        </form>
    );
};