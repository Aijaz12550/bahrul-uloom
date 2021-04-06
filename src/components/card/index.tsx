import { Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography, Grow } from "@material-ui/core";
import { FC, memo } from "react";
import { styles } from "./style"

type Props = {
    title: string,
    mediaImage:any
}
const CourseCard: FC<Props> = (props) => {

    let { title, mediaImage } = props;

    const classes = styles();
    return (
      <Grow
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: 1000 } : {})}
        >
        <Card className={classes.root}>
            <CardHeader
                title={title}
            />
            <CardMedia
                image={mediaImage}
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
        </Grow>

    )
}

export default memo(CourseCard);