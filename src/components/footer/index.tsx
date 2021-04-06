import { Grid, Toolbar, Typography } from "@material-ui/core"
import { FC, memo } from "react"
import { styles} from "./style"

const Footer: FC<any> = () => {

    const classes = styles();
    return(
        <Grid container justify="center" className={classes.container}>
            <Typography variant="h5">
                Lead Teacher: Mr. Subhan Peer Zada
            </Typography>
           <Toolbar/>
            <Typography variant="h5">
            Contact : # 0306-2841362
            </Typography>

        </Grid>
    )
}

export default memo(Footer);