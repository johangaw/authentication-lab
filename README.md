# Authentication Lab 😎

This application is a archive with very secret information.
Unfortunately, some lazy consultant has ignored to implement the authentication needed to protect the secret data!
You must hurry to fulfill this task before any malicious muppets arrives and steal the information 😱 🏴‍☠️

## Project structure

### pages/

This is a nextjs project, which means (almost) every file inside the `pages` directory creates a route on the server. These files exports a react component which is shown when a browser goes to that specific URL.

Remember that al code in these files runs on the client, which mean we can have no secrets here.

- `pages/index.tsx` => `localhost:3000/`
- `pages/sign-up.tsx` => `localhost:3000/sign-up`
- `pages/secrets.tsx` => `localhost:3000/secrets`

Also, every file within the `pages/api` directory cerates an API route which we can call from our react components.

Remember that all code in these files are only run on the server and never in the browser.

- `pages/api/secrets.ts` => `localhost:3000/api/secrets`
- `pages/api/auth/sign-in.ts` => `localhost:3000/api/auth/sign-in`
- `pages/api/auth/sign-out.ts` => `localhost:3000/api/auth/sign-out`
- `pages/api/auth/sign-up.ts` => `localhost:3000/api/auth/sign-up`

### services/

Here we find services that helps out with backend tasks. For example `services/db/userRepository` and `services/db/tokenRepository` which can be used to persist users and token objects. `services/crypto` contains examples of hash and encryption functions.

### components/

React components that we want to be able to reuse in many places.

## Get started

Install dependencies: `npm install`

Start development server: `npm run dev`

Open site at: `http://localhost:3000`

## Your mission (whether you accept it or not)

Add authentication (and later authorization) so that the the secrets on `localhost:3000/secrets` are protected.

All code already in the repo is just a guideline, feel free to change and add as much as you want 😁

### User stories

- As a user, I should be able to create an account at `localhost:3000/sign-up` by providing an email and a password.
  - Users should be persisted between server restarts
- As a user with an account, I should be able to sign in at `localhost:3000/` using my email end password.
  - The sign in endpoint should be: `localhost:3000/api/auth/sign-in`
  - If the wrong email and password is used the endpoint should return status 401
  - A successful sign in should return a token back to the client
  - A successful sign in should move the user to `localhost:3000/secrets`
- As a signed in user, I should be able to view the secrets listed at `localhost:3000/secrets`
  - Authentication should be performed by sending the token in the `Authentication` header
  - An un-authenticated request to `localhost:3000/api/secrets` should result in a 401 **AND NO DATA**
  - An authenticated request should return all data
- As a user, I **DO NOT** want to have password stored in plain text anywhere!!!

---

Holy moly! Are you done already 😃. Great Job!  
Here are some more stuff that we need to fix. Feel free to take them in any order though.

---

- As a signed in user, when I reload my browser (ctrl+R or cmd+R) I should still be signed in
- As an un-authenticated user, I should be redirected to the the login page when the secrets endpoint returns a 401
- As a signed in user, I should be able to sign out using a button on the secrets page
  - The token needs to be removed from both server and client
- As a user directly after a successful sign up, I want to be redirected to the sign in page
- As a user, I want my token to only be valid for 30sec
  - Using the token to access secrets after this should result in status 401 from the server.
- As a system manager, I would like new user to only have access to secrets with level "NotSoSecret" (this is called authorization)
  - Only these items should be shown when the signed in user accesses the secrets endpoint
- As a system manager, I want to be able to grant more access to a player
  - This should be done via a new endpoint
  - The endpoint should return 401 for signed out users
  - The endpoint should return 403 for signed in regular users (not system managers)
  - The manager should be able to change the "security level" of a given user to any value
  - Changes should apply directly without any need for the affected user to sign out
- As a signed in user, I want to be able to sign everyone out from my account
  - If the same user has signed in in another browser, that session should be terminated as well
- As a signed in user, when I open a new tab in my browser and navigate to `localhost:3000/secrets` I still have access
- As a signed in user, when I close all secret taps and then opens a new open, I should be signed out
