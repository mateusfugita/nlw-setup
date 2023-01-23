<h1 align='center'>
  Habits Tracker
</h1>

<p align="center">
  <a href="#book-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-config-application">Config application</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-running-the-app">Running the app</a>
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=React Native&message=framework&color=00A1BF&labelColor=000000&logo=REACT" alt="React Native" />
  
  <img src="https://img.shields.io/static/v1?label=types&message=Typescript&color=00A1BF&labelColor=000000" alt="Typescript" />
</p>

## :book: About
Habits Tracker is a project developed during NLW's Rocketseat event (NLW Setup :rocket:) and created to register and track your daily (or you can choose the recurrence according to your routine) habits to help you accomplish your goals :dart:

## ⚒️ Technologies
Back-end, front-end and mobile projects were developed with [Typescript](https://www.typescriptlang.org/)

### Back-end
- Node.js
- Fastify
- Prisma
- Zod

### Front-end
- React
- Vite
- Tailwindcss
- Radix
- Phosphor
- Clsx

### Mobile
- React Native
- Expo
- Google Fonts
- React Navigation
- Tailwindcss
- Clsx
- Reanimated

## :gear: Config application
Create a `.env` file in back-end root folder with the connection string of your database (this project was developed using SQLite).

```
DATABASE_URL=
```

## 🚀 Running the app

### Back-end
- Go to the back-end folder
```
cd server
```

- Install the dependencies
```
yarn
```

- Start the server
```
yarn dev
```

It will start running the server in **http://localhost:3333**.

### Front-end
- Go to the front-end folder
```
cd web
```

- Install the dependencies
```
yarn
```

- Start the app
```
yarn dev
```

It will start running the web page in **http://localhost:5173**.

### Front-end
- Go to the mobile folder
```
cd mobile
```

- Install the dependencies
```
yarn
```

- Start the app
```
yarn start
```

It will open a web page in **http://localhost:19002** and then you can run it as you like (using the Expo app, Android emulator, IOS emulator...).
