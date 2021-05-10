import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AdminRoutes, HomeScreen, LoginScreen, SignupScreen, StudentDashBoard } from "./screens"
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

  console.log("process", process.env.REACT_APP_test)
  return (
   <Router>
     <ThemeProvider theme={theme}>

     <Grid className={classes.chatIcon}>
     <ChatIcon style={{ fontSize: 35,color:"#fff" }} />
     </Grid>

     <Switch>
       <Route exact path="/" component={HomeScreen}  />
       <Route exact path="/login" component={LoginScreen}  />
       <Route exact path="/signup" component={SignupScreen}  />
       <Route path="/dashboard/student" component={StudentDashBoard} />
       <Route exact path="/admin" component={AdminRoutes} />
     </Switch>
     </ThemeProvider>
   </Router>
  );
}

export default App;
