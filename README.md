[ChuckNorrisJokes_React](https://nataliapylypenko.github.io/ChuckNorrisJokes_React/)

## Додаток з Жартами про Чака Норріса

### Мета:
Створити додаток із жартами про Чака Норріса, який отримує дані від API і дозволяє користувачам переглядати,
категоризувати, додавати у вибране та видаляти жарти.

### Технічні вимоги:
1. React.js: Використовувати бібліотеку React.js для розробки користувацького інтерфейсу.
2. API Чака Норріса: Використовувати API Chuck Norris для отримання жартів про Чака Норріса у форматі JSON - `https://api.chucknorris.io/`.
3. Локальне сховище: Зберігати вибрані жарти в локальному сховищі браузера.

### Функціональність:
1. Отримання випадкового жарту: Користувач може натиснути кнопку "Випадковий жарт", щоб отримати випадковий жарт про Чака Норріса.
2. Отримання жартів за категоріями: Користувач може переглядати доступні категорії жартів та отримувати випадковий жарт із обраної категорії.
3. Пошук за текстом: Користувач може використовувати поле пошуку для пошуку жартів за допомогою вільного тексту.
4. Додавання та видалення улюблених жартів: Користувач може додавати жарти до вибраного та видаляти їх з нього.
5. Відображення вибраних жартів: У правій частині інтерфейсу користувача повинен бути блок "Улюблені", де відображаються всі додані користувачем улюблені жарти.
6. Локальне збереження вибраних жартів: Улюблені жарти повинні зберігатися в локальному сховищі браузера, щоб вони були доступні після перезавантаження сторінки.

### Компоненти:
* App: Головний компонент, що містить усі інші компоненти і стан додатку.
* RandomJoke: Компонент для відображення випадкового жарту.
* CategoryJokes: Компонент для відображення жартів за обраною категорією.
* SearchJokes: Компонент для пошуку жартів за текстом.
* FavoriteJokes: Компонент для відображення улюблених жартів.
* JokeCard: Компонент карточки жарту, який містить текст жарту та кнопку для додавання/видалення з вибраного.
* Button: Компонент кнопки для виклику функціоналу.

### Додатково:
* Враховувати оптимізацію продуктивності для покращення швидкості завантаження та відгуку додатку.
* Додати обробку помилок та повідомлення про стан завантаження для кращого користувацького досвіду.
* Забезпечити можливість скасування запитів до сервера при необхідності.
* Зробити додаток адаптивним для коректного відображення на різних пристроях та екранах.


## Project Structure:

* `src/assets` - all global images
* `src/component` - components that consist of several ui or those that cannot be reused
* `src/component/UI` - all ui, reusable components (Button, Item, Input...)
* `src/layouts` - all layouts, what is always on the page (Header, Footer, Navbar, Sidebar...)
* `src/mock` - all temporary files for testing and demonstration of the project
* `src/sections` - all large blocks containing several components
* `src/utils` - all reusable functions, custom hooks
* `src/services` - all requests to the api

## GitHub Pages

* Go to Settings / Pages
* In the tab GitHub Pages find Source, select branch main, push the Save
* Copy the unique link (UL)
* Then go to the project on package.json

``` js
...
"homepage": "[unique_link]/",
...
"scripts": {
    ...
    "deploy": "gh-pages -d [the_name_of_the_build_folder]",
    "predeploy": "npm run build"
  },
...
```

* Install the package `npm install gh-pages --save-dev`
* Go to Settings / Pages
* In the tab GitHub Pages find Source, select branch gh-pages, push the Save
* For deploy to the branch gh-pages `npm run deploy`
