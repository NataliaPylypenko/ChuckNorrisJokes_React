import React, {useState} from 'react';
import {Form, JokeCard, Title} from "..";
import cn from './Main.module.scss'
import {fetchJokes} from "../../services/jokeServices";

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

    const [jokes, setJokes] = useState([]);

    console.log(jokes);

    const changeChecked = item => {
        setSelectedValue(item.value);
    };

    const submitForm = e => {
        e.preventDefault();

        switch (selectedValue) {
            case 'random':
                fetchJokes('/random')
                    .then(data => setJokes([...jokes, data]));
                break;
            case 'categories':
                let checkedCategory = 'animal';
                fetchJokes(`/random?category=${checkedCategory}`)
                    .then(data => setJokes([...jokes, data]));
                break;
            case 'search':
                let queryValue = 'cat';
                fetchJokes(`/search?query=${queryValue}`)
                    .then(data => data.result.forEach(joke => setJokes([...jokes, joke])));
                break;
        }

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

            {jokes && jokes.map(joke => (
                <JokeCard key={joke.id} joke={joke} cl='cardLg' />
            ))}

        </div>
    );
};
