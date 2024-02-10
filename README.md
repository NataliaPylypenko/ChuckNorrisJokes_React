[CNJokes_React](https://nataliapylypenko.github.io/CNJokes_React/)

## Додаток з Жартами про Чака Норріса

### Мета:
Створити додаток із жартами про Чака Норріса, який отримує дані від API і дозволяє користувачам переглядати,
категоризувати, додавати у вибране та видаляти жарти.

### Функціональність:
1. Використовуйте API Чака Норріса, щоб отримати жарти у форматі JSON - `https://api.chucknorris.io/`
2. Можливість отримати випадковий жарт.
3. Можливість отримати випадковий жарт із категорій (використовуйте API, щоб отримати всі доступні категорії).
4. Можливість отримувати анекдоти за допомогою вільного текстового пошуку.
5. Будь-який жарт можна позначити/зняти з вибраного.
6. Анекдоти, позначені як улюблені, повинні з'явитися в правій частині Вибране.
7. Улюблені жарти повинні бути доступні після перезавантаження сторінки та зберігатися в браузері.

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
