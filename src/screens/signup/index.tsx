import { FC, memo } from "react";
import { Grid, TextField, Button, TextareaAutosize } from "@material-ui/core";
import { Header, Stepper } from "../../components";
import { styles } from "./style";


const headerRoutes = [{title:"Home", route:"/home"},{title:"Support", route:".support"}]

const SignUp: FC <any> = () => {
    const classes = styles();
   
    return(
        <Grid container>
            <Header headerRoutes={headerRoutes} />
            <Grid className={classes.root}>
                <form className={classes.form} noValidate autoComplete="off">
                    {/* Stepper */}
                    <Stepper />

                    <TextField className={classes.input} type="text"  label="Full Name" variant="outlined" />
                    <TextField className={classes.input} type="email"  label="Email" variant="outlined" />
                    <TextField className={classes.input} type="password"  label="Password" variant="outlined" />
                    <TextField className={classes.input} type="number"  label="Contact Number" variant="outlined" />
                    <TextareaAutosize className={classes.input} rowsMin={3} placeholder="Address" />;

                   
                   <Grid container justify="flex-end">
                    <Button className={classes.btn} variant="contained" >previous</Button>
                    <Button className={classes.btn} variant="contained" color="primary">Next</Button>
                   </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default memo(SignUp);