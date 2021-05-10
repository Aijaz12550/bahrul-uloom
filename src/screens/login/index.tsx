import { Button, Grid, TextField, Typography, CircularProgress } from "@material-ui/core";
import { useState, FC, memo, FormEvent } from "react";
import { Header } from "../../components";
import { styles } from "./style";
import { useHistory } from "react-router-dom";
import { auth } from "../../config/firebase";

const headerRoutes = [{title:"Home", route:"/"},{title:"Support", route:".support"}]
const Login: FC<any> = () => {

    const [error, setError] = useState<string>("");
    const [submitLoading, setSubmitLoading] = useState<boolean>(false);
    const classes = styles();
    const history = useHistory();

    // handlers
    const routeHandler = (route:string): void => {
        history.push(route)
       
    } 

    const loginHandler = async (event:FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        event.stopPropagation();
        setError("");
        setSubmitLoading(true)

        try {
            
            let {email, password} = event.currentTarget
            await auth.signInWithEmailAndPassword(email.value,password.value)
            setSubmitLoading(false)

            history.push("/dashboard/student")

        } catch (error) {
            console.log("error ==>",error.message)
            setError(error.message);
            setSubmitLoading(false)
        }
        
    }


    // jsx
    return (
        <Grid container>
            <Header headerRoutes={headerRoutes} />
            <Grid className={classes.root}>
                <form onSubmit={loginHandler} className={classes.form} noValidate autoComplete="off">
                    <TextField className={classes.input} type="email" name="email" label="Email" variant="outlined" />
                    <TextField className={classes.input} type="password" name="password"  label="password" variant="outlined" />
                    <Typography className={classes.error} variant="body2" component="p">
                        {error}
                    </Typography>
                   <Grid>
                       <Button onClick={()=>routeHandler("/signup")}>
                           SignUp
                       </Button>
                       <Button>
                           Forgot password
                       </Button>
                   </Grid>
                    <Button type="submit" disabled={submitLoading} variant="contained" color="primary">
                        {
                            submitLoading ? <CircularProgress size={23} />:
                            "Submit"

                        }
                        </Button>
                </form>
            </Grid>
        </Grid>
    )
}

export default memo(Login);