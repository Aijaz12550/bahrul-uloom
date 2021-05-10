import { FC, memo, Fragment } from "react"
import { AppBar, Avatar, Grid, Toolbar, Typography } from "@material-ui/core"
import { styles } from "./style";
import { useHistory } from "react-router-dom";
import { nanoid } from "nanoid";
import dummyProfilePic from "../../assets/dummyProfilePic.jpeg";


type HeaderRoutes  = {
    title: string
    route: string
}
type Props = {
    headerRoutes: HeaderRoutes[]
    title?: string
}

const Header: FC<Props> = (props) => {
    const { headerRoutes } = props;

    // hooks
    const classes = styles();
    const history = useHistory();


    // handlers
    const routeHandler = (route: string,) => {
        history.push(route)
    }

    // jsx
    return (
        <Fragment>
            <AppBar position="static" >
                <Toolbar>
                    <Typography variant="h6" className={classes.logo} onClick={()=>routeHandler("/")}>
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
                        <Avatar alt="Aijaz Abbasi" src={dummyProfilePic} />
                </Toolbar>
            </AppBar>

        </Fragment>
    )
}

Header.defaultProps = {
    title: "Bahr Ul Uloom"
}

export default memo(Header);