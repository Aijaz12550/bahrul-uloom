import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { HomeScreen } from "./screens"
import { ThemeProvider } from '@material-ui/styles';
import ChatIcon from '@material-ui/icons/Chat';
import { theme } from './theme';
import { Grid, makeStyles } from '@material-ui/core';


const styles = makeStyles((theme:any)=>({
  chatIcon:{
    position:"fixed",
    bottom: 15,
    right: 15,
    borderRadius:"48%",
    background: theme.palette.primary.dark,
    padding: theme.spacing(1.5),
    zIndex: 1,
    cursor:"pointer"
  }
}))

function App() {

  let classes = styles();
  return (
   <Router>
     <ThemeProvider theme={theme}>
     <Redirect from="/" to="/home" />

     <Grid className={classes.chatIcon}>
     <ChatIcon style={{ fontSize: 35,color:"#fff" }} />
     </Grid>

     <Switch>
       <Route path="/home" component={HomeScreen}  />
     </Switch>
     </ThemeProvider>
   </Router>
  );
}

export default App;
