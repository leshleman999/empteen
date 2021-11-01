import React, {useState} from "react";
import "./App.css";
import { Router, Switch, Route} from 'react-router';
import Login from "./components/Login";
import Signup from "./components/Signup";
import History from './components/History';
import Home from "./components/Home";
import Settings from "./components/Settings";
import ManageEnvironments from "./components/ManageEnvironments";
// import { LightTheme, DarkTheme, GlobalStyles } from "./theme";
// import styled, { ThemeProvider } from 'styled-components';
import EnvAdd from "./components/EnvAdd";
import EnvEdit from "./components/EnvEdit";
import ManageMembers from "./components/ManageMembers";
import Sidebar from "./components/Sidebar";
import Sidebar2 from "./components/Sidebar2";
import Content from "./components/Content";
import Event from "./components/Event";
import Contact from "./components/Contact";
import testConnection from "./components/testConnection";

export const EmpTeenContext = React.createContext()
export const EmpTeenUserEnvs = React.createContext()
export const EmpTeenCurEnv = React.createContext()

function App() {


  const [user,setUser]=useState({email: "xxx", password: "xxx"})
  const [userEnvs,setUserEnvs]=useState([])
  const [curEnv,setCurEnv]=useState([])
  

  return (

      <EmpTeenContext.Provider value={[user,setUser]}>
        <EmpTeenUserEnvs.Provider value={[userEnvs,setUserEnvs]}>
          <EmpTeenCurEnv.Provider value={[curEnv,setCurEnv]}>
          <div className="App">
            <Router history={History}>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/home/about" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/environments/add" component={EnvAdd} />
                <Route exact path="/environments/edit" component={EnvEdit} />
                <Route exact path="/environments" component={ManageEnvironments} />
                <Route exact path="/members" component={ManageMembers} />
                <Route exact path="/content" component={Content}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/test" component={testConnection}/>
              </Switch>
            </Router>
          </div>
          </EmpTeenCurEnv.Provider>
        </EmpTeenUserEnvs.Provider>
      </EmpTeenContext.Provider>

    

  );
}

export default App;


