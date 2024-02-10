import React from 'react';
import {Form} from "..";

export const Main = () => {
    return (
        <div className="main">
            <h2 className="main__title">MSI 2020</h2>

            <h2 className="main__action">
                <span className="greeting">Hey!</span>
                <br />
                Let’s try to find a joke for you:
            </h2>

            <Form />

            <div id="cardsJoke" className="cards"></div>
        </div>
    );
};
