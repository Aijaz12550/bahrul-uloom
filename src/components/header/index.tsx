import { FC, memo, Fragment } from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"

const Header:FC<any> = () => {
    return(
        <Fragment>
            <AppBar >
                <Toolbar>
                <Typography variant="h6">
                    Bahrul uloom
                </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Fragment>
    )
}

export default memo(Header);