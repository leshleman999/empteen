import React from "react";
import "./App.css";
import { Router, Switch, Route} from 'react-router';
import Login from "./components/Login";
import Signup from "./components/Signup";
import History from './components/History';
import Home from "./components/Home";
import Settings from "./components/Settings";
import ManageEnvironments from "./components/ManageEnvironments";
import EnvAdd from "./components/EnvAdd";
import EnvEdit from "./components/EnvEdit";
import ManageMembers from "./components/ManageMembers";
import Content from "./components/Content";
import ContentImage from "./components/ContentImage";
import Contact from "./components/Contact";
// import ContentAnnouncements from './components/ContentAnnouncements';


function App() {

  return (

          <div className="App">
            <Router history={History}>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route exact path="/home" component={Home} />
                <Route path="/home/about" component={Home} />
                <Route path="/settings" component={Settings} />
                <Route exact path="/environments" component={ManageEnvironments} />
                <Route exact path="/environments/add" component={EnvAdd} />
                <Route exact path="/environments/edit" component={EnvEdit} />
                <Route path="/members" component={ManageMembers} />
                {/* <Route exact path="/content" component={Content}/> */}
                {/* <Route path="/contentImage" component={ContentImage}/> */}
                <Route path="/contact" component={Contact}/>
                {/* <Route path='announcements' component={ContentAnnouncements} /> */}
              </Switch>
            </Router>
          </div>

  );
}

export default App;


