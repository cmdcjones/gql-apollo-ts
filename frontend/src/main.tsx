import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import {
    ApolloClient, 
    InMemoryCache, 
    ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <RouterProvider router={router} />
      </ApolloProvider>
  </React.StrictMode>,
)
