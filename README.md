# AI Task Manager

A compact full-stack CRUD demo with a React client and an Express API. It shows the request flow for listing, creating, and deleting tasks against a separately deployed backend.

## Architecture

```text
React + Axios client  →  Express REST API  →  in-memory task store
```

## Features

- Fetch and render tasks from the API
- Create non-empty tasks
- Delete tasks by ID
- CORS-enabled JSON API
- Separate client and server projects

## Run locally

Start the API:

```bash
cd server
npm install
node index.js
```

In another terminal, start the client:

```bash
cd client
npm install
npm run dev
```

The client currently targets the deployed Render API. For local development, change the API base URL in `client/src/App.jsx` to `http://localhost:3001`.

## Scope

Task data is intentionally stored in memory and resets whenever the server restarts. `mongoose` is present in the server manifest but is not wired into this version.

## Production roadmap

Move the API URL to an environment variable, persist tasks in MongoDB, validate request bodies, add update/completion states, return structured errors, and cover the API with automated tests.