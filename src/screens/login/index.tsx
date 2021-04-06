import { Button, Grid, TextField } from "@material-ui/core";
import { FC, memo } from "react";
import { Header } from "../../components";
import { styles } from "./style";
import { useHistory } from "react-router-dom";

const headerRoutes = [{title:"Home", route:"/home"},{title:"Support", route:".support"}]
const Login: FC<any> = () => {

    const classes = styles();
    const history = useHistory();

    // handlers
    const routeHandler = (route:string) => {
        history.push(route)
    }


    // jsx
    return (
        <Grid container>
            <Header headerRoutes={headerRoutes} />
            <Grid className={classes.root}>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField className={classes.input} type="email"  label="Email" variant="outlined" />
                    <TextField className={classes.input} type="password"  label="password" variant="outlined" />
                   <Grid>
                       <Button onClick={()=>routeHandler("/signup")}>
                           SignUp
                       </Button>
                       <Button>
                           Forgot password
                       </Button>
                   </Grid>
                    <Button variant="contained" color="primary">Submit</Button>
                </form>
            </Grid>
        </Grid>
    )
}

export default memo(Login);