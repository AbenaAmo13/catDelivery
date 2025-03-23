# Cat Delivery API and Frontend

NestJS Backend and React Vite and Typescript frontend to display delivery information
You can set up environment variables and use different ports than the one provided below.

In the backend directory.js, create a .env file with the following. This is an example
containing the defaults cors origins and ports

```
CORS_ORIGINS='http://localhost:5173'
PORT=3000
```

In the frontend directory, create a .env.local or a .env file. An example can be:

```
VITE_NEST_BACKEND_BASE_URL= http://localhost:3000
```
