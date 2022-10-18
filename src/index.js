import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from "./FirstComponent";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import SingIn from "./components/SingIn";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*/!*<App />*!/*/}
    {/*/!*  <Counter/>*!/*/}
      <Navbar/>
      {/*<main className={"container-sm mt-5"}>*/}
      {/*    <SingIn/>*/}
      {/*</main>*/}
      <main className="container-md mt-5">
          <Table/>
      </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
