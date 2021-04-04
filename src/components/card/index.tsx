import { Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from "@material-ui/core";
import { FC, memo } from "react";
import img1 from "../../assets/hero.jpeg"
import { styles } from "./style"

type Props = {
    title: string
}
const CourseCard: FC<Props> = (props) => {

    let { title } = props;

    const classes = styles();
    return (

        <Card className={classes.root}>
            <CardHeader
                title={title}
            />
            <CardMedia
                image={img1}
                title="Paella dish"
                className={classes.media}
            />
            <CardContent >
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
            </CardContent>
            <Grid container justify="center" >

            <Button  color="primary">
                Detail
            </Button>
            </Grid>
        </Card>

    )
}

export default memo(CourseCard);