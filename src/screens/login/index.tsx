import { Grid } from "@material-ui/core";
import { FC, memo } from "react";
import { Header } from "../../components";

const Login: FC<any> = () => {
    return (
        <Grid container>
            <Header />

        </Grid>
    )
}

export default memo(Login);