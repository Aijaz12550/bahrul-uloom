import { Grid, Toolbar } from "@material-ui/core";
import { FC, memo } from "react";

const AdminDashboard: FC<any> = () => {
    return(
        <Grid container >
            
            <Toolbar>
                Admin Dashbboard
            </Toolbar>

        </Grid>
    )
} 

export default memo(AdminDashboard);