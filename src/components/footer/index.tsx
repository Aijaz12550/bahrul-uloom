import { Grid, Typography } from "@material-ui/core"
import { FC, memo } from "react"
import { styles} from "./style"

const Footer: FC<any> = () => {

    const classes = styles();
    return(
        <Grid container className={classes.container}>
            <Typography variant="h5">
                Footer
            </Typography>
            <Typography variant="h5">
                Footer
            </Typography>

        </Grid>
    )
}

export default memo(Footer);