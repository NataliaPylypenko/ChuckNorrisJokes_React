import React, {useEffect, useState} from 'react';
import {JokeCard, Title} from "..";
import cn from './Side.module.scss'

export const Side = () => {

    const fetchLocalStorageData = (key, defaultValue = []) => {
        let storage = localStorage.getItem(key);
        return storage ? JSON.parse(storage) : defaultValue;
    };

    const [favoriteJokes, setFavoriteJokes] = useState([]);

    useEffect(() => {
        setFavoriteJokes(fetchLocalStorageData('favoriteJokes'));
    }, []);

    return (
        <div className={cn.side}>
            <Title style={cn.title}>Favourite</Title>

            <div className="cards">
                {favoriteJokes && favoriteJokes.map(favoriteJoke=> (
                    <JokeCard key={favoriteJoke.id} favoriteJoke={favoriteJoke}/>
                ))}
            </div>
        </div>
    );
};