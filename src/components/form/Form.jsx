import React from 'react';

export const Form = () => {
    return (
        <form id="jokeForm" className="form">
            <div className="collapsible">
                <label>
                    <input type="radio" name="jokeType" value="random" checked> Random Value </input>
                </label>
            </div>
            <div></div>

            <div className="collapsible">
                <label>
                    <input type="radio" name="jokeType" value="categories"> Categories </input>
                </label>
            </div>
            <div className="content">
                <ul id="jokeCategories" className="category-labels"></ul>
            </div>

            <div className="collapsible">
                <label>
                    <input type="radio" name="jokeType" id="jokeSearch" value="search"> Search </input>
                </label>
            </div>
            <div className="content">
                <input type="text" className="search-input" placeholder="Free text search..." />
            </div>

            <button type="submit" id="getJoke" className="btn btn-submit">Get a joke</button>
        </form>
    );
};