import { Grid, TextField } from "@material-ui/core";
import { FC, memo } from "react";
import { styles } from "./style"

const Step2: FC<any> = () => {

    // hooks
    const classes = styles();

    // jsx
    return(
       <Grid container justify="center" className={classes.root}>
           <TextField className={classes.input} variant="outlined" label="Full Name" />
           <TextField className={classes.input} variant="outlined" label="Email" />
           <TextField className={classes.input} variant="outlined" label="Date Of Birth" />
           <TextField className={classes.input} variant="outlined" label="Password" />
           <TextField className={classes.input} variant="outlined" label="Address" />
       </Grid>
    )
}

export default memo(Step2);