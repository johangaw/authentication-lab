# Authentication Lab 😎

This application is a archive with very secret information.
Unfortunately, some lazy consultant has ignored to implement the authentication needed to protect the secret data!
You must hurry to fulfill this task before any malicious muppets arrives and steal the information 😱 🏴‍☠️

## Project structure

### pages/

This is a nextjs project, which means (almost) every file inside the `pages` directory creates a route on the server. These files exports a react component and that is what is shown when a browser goes to that specific URL.

- `pages/index.tsx` => `localhost:3000/`
- `pages/sign-up.tsx` => `localhost:3000/sign-up`
- `pages/secrets.tsx` => `localhost:3000/secrets`

Also, every file within the `pages/api` directory cerates an API route which we can call with the `fetch` function from our react components.

Remember that all code in these files are only run on the server and never in the browser.

- `pages/api/secrets.ts` => `localhost:3000/api/secrets`
- `pages/api/auth/sign-in.ts` => `localhost:3000/api/auth/sign-in`
- `pages/api/auth/sign-out.ts` => `localhost:3000/api/auth/sign-out`
- `pages/api/auth/sign-up.ts` => `localhost:3000/api/auth/sign-up`

### services/

Here we find services that helps out with backend tasks. For example `services/db/userRepository` and `services/db/tokenRepository` which can be used to persist users and token objects. `services/crypto` contains reimplemented functions for hashing and

## Get started

Install dependencies: `npm install`

Start development server: `npm run dev`
