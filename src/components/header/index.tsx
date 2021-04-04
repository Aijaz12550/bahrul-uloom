import { FC, memo, Fragment } from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"

const Header:FC<any> = () => {
    return(
        <Fragment>
            <AppBar position="static" >
                <Toolbar>
                <Typography variant="h6">
                    Bahrul uloom
                </Typography>
                </Toolbar>
            </AppBar>
           
        </Fragment>
    )
}

export default memo(Header);