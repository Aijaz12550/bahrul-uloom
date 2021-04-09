import { Grid, TextField } from "@material-ui/core";
import { FC, memo } from "react";
import { styles } from "./style"

const Step3: FC<any> = () => {

    // hooks
    const classes = styles();
    return(
        <Grid container justify="center" >
        <TextField className={classes.input} variant="outlined" label="Last Degree Name" />
        <TextField className={classes.input} variant="outlined" label="Start Year" />
        <TextField className={classes.input} variant="outlined" label="End Year" />
        
    </Grid>
    )
}


export default memo(Step3)