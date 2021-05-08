import { Grid, Toolbar } from "@material-ui/core";
import { FC, memo } from "react";
import { Header } from "../../../components";

const AdminDashboard: FC<any> = () => {
    return(
        <Grid container >
            <Header />
            <Toolbar>
                Admin Dashbboard
            </Toolbar>

        </Grid>
    )
} 

export default memo(AdminDashboard);