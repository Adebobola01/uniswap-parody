import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const root = ReactDOM.createRoot(document.getElementById('root')!);

// const client = new ApolloClient({
//   uri: "https://api.spacex.land/graphql/",
//   cache: new InMemoryCache() 
// })

root.render(
  <React.StrictMode>
    {/* <ApolloProvider client={client} > */}
      <BrowserRouter>
      <App />
      </BrowserRouter>
    {/* </ApolloProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
