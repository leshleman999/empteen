import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reducer, { curEnv,userEnvs,user,allenvs,allusers,envTopics } from "./utils/reducer"
import { StateProvider } from "./utils/StateProvider";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} user={user} curEnv={curEnv} userEnvs={userEnvs} allenvs={allenvs} allusers={allusers} envTopics={envTopics}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


