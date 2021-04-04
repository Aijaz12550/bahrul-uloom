import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { HomeScreen } from "./screens"
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';
function App() {
  return (
   <Router>
     <ThemeProvider theme={theme}>
     <Redirect from="/" to="/home" />
     <Switch>
       <Route path="/home" component={HomeScreen}  />
     </Switch>
     </ThemeProvider>
   </Router>
  );
}

export default App;
