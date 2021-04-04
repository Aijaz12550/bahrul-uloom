import { Grid } from "@material-ui/core";
import { FC, memo } from "react";
import heroImage from "../../assets/heroo.jpg"

const Hero: FC<any> = () => {
    return(
        <Grid container >
            <img src={heroImage} alt="" height="auto"  width="100%"/>
        </Grid>
    )
}

export default Hero