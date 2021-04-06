import { FC, memo, Fragment } from "react"
import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core"
import { styles } from "./style";


const Header:FC<any> = () => {
    const classes = styles();
    return(
        <Fragment>
            <AppBar position="static" >
                <Toolbar>
                <Typography variant="h6">
                    Bahrul uloom
                </Typography>

                <Grid className={classes.tabs} >
                    <Typography className={classes.tab} variant="body2" component="span" >
                        Login
                    </Typography>

                    <Typography className={classes.tab} variant="body2" component="span" >
                        support
                    </Typography>

                   
                </Grid>
                </Toolbar>
            </AppBar>
           
        </Fragment>
    )
}

export default memo(Header);