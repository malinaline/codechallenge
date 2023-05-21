# :rocket: Starwars Movie App - Code Challenge

This is a simple web application using the SWAPI API

MVP:

- The app should be responsive and styled with a mobile first approach. (done)
- Create a page to display movies with live data fetched from the Star Wars API. (done)
- Create a navigation to switch between pages in the application. (done)
- Use a Loader component when loading movie data. (done)
- When a user clicks on a movie, a single movie page should display data from that movie. (done)
- Create a page to list characters. This page should be empty to start with, and only get characters added as the user clicks into the different movies. This page should only list characters belonging to movies that the user has clicked on. (done)

Bonus

- Implement a single character page to display data for each character.
- Use TypeScript. (done)
- Use Styled Components. (done)

## 👩‍💻 Author

- [@malinaline](https://www.github.com/malinaline)

## Run Locally

Clone the project

```bash
  git clone https://github.com/malinaline/stampen.git
```

Go to the project directory

```bash
  cd my-app
```

Install dependencies

```bash
  npm install
```

Start on Localhost

```bash
  npm start
```

## Watch live at Netlify

https://starwarsmovieapp.netlify.app/

## Tech Stack

**Client:** React, TypesScript, Styled Components

## Resources

Swapi - starwars API - https://swapi.dev/

## NPM - Dependencies

    react-router-dom
    react-slugify
    types/styled-components


  h1 {
    font-size: 60px;
  }

  h2 {
    font-size: 35px;
  }

  p {
    font-size: 15px;
  }

  a {
    text-decoration: none;
    font-size: 30px;
    font-weight: bold;
    color: var(--black);
    cursor: pointer;
  }