import { FC, memo, Fragment } from "react"
import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core"
import { styles } from "./style";
import { useHistory } from "react-router-dom";
import { nanoid } from "nanoid";

const Header: FC<any> = (props) => {
    const { headerRoutes } = props;

    // hooks
    const classes = styles();
    const history = useHistory();


    // handlers
    const routeHandler = (route: string) => {
        history.push(route)
    }

    // jsx
    return (
        <Fragment>
            <AppBar position="static" >
                <Toolbar>
                    <Typography variant="h6" className={classes.logo} onClick={()=>routeHandler("/home")}>
                        Bahrul uloom
                    </Typography>

                    <Grid className={classes.tabs} >
                        {
                            headerRoutes?.map?.((eachRoute: any, index: number) => {
                                return (
                                    <Typography key={nanoid()} onClick={() => routeHandler(eachRoute.route)} className={classes.tab} variant="body2" component="span" >
                                        {eachRoute.title}
                                    </Typography>

                                )
                            })
                        }
                    </Grid>
                </Toolbar>
            </AppBar>

        </Fragment>
    )
}

export default memo(Header);