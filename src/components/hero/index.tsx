import { Grid, Typography, Slide } from "@material-ui/core";
import { FC, memo } from "react";
import heroImage from "../../assets/hero.jpg";
import { styles } from "./style";

const Hero: FC<any> = () => {
    const classes = styles();
    return (
        <Grid container className={classes.container} >
            <Grid item md={6} sm={12} lg={6} className={classes.textContainer}>
                <Slide direction="right" in={true} mountOnEnter unmountOnExit>

                <Typography variant="h4" >
                    The World's Online Quran Learning place.
                </Typography>
                </Slide>
                <Typography variant="body2" component="p" >
                    The history of Islam concerns the political, social, economic and cultural developments of Islamic civilization.
                    Most historians[1] accept that Islam originated in Mecca and Medina at the start of the 7th century CE. Muslims
                    regard Islam as a return to the original faith of the prophets, such as Jesus, Solomon, David, Moses, Abraham,
                    Noah and Adam, with the submission (islam) to the will of God.[2][3][4]
                </Typography>

            </Grid>
            <Grid item md={6} sm={12} lg={6} className={classes.imagesContainer} >

                <span className={classes.imageLeft}>
                    <img className={classes.imgLeft} src={heroImage} alt="" height="250" width="250px" />
                </span>
                <span className={classes.imageRight}>
                    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                        <img className={classes.imgRight} src={heroImage} alt="" height="250" width="250px" />
                    </Slide>
                </span>

            </Grid>
        </Grid>
    )
}

export default memo(Hero)