const API = 'https://api.chucknorris.io/jokes';

export const fetchJokes = (params) => fetch(`${API}${params}`)
    .then(response => response.ok ? response.json() : Promise.reject(response.statusText))
    .catch(err => console.error(err));
