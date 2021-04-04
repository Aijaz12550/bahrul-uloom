import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { HomeScreen } from "./screens"
function App() {
  return (
   <Router>
     <Redirect from="/" to="/home" />
     <Switch>
       <Route path="/home" component={HomeScreen}  />
     </Switch>
   </Router>
  );
}

export default App;
