import { FC, memo } from "react";
import { Footer, Header, Hero, CourseCard } from "../../components";
import { Grid, Toolbar, Typography } from "@material-ui/core"
import { styles } from "./style"

const Home: FC<any> = () => {

    const classes = styles();
    return (
        <div>
            <Header />
            <Grid container style={{ minHeight: "calc( 100vh - 200px)" }}>
                <Hero />
                <Toolbar>
                    <Typography variant="h4">
                        Available Courses
                    </Typography>
                </Toolbar>
                <Toolbar className={classes.cardContainer}>
                   
                    {
                        ["Nazra", "Hifz", "Quran"].map((cours, index) => {
                            return (
                                
                                <CourseCard title={cours} />
                                )
                            })
                        }
                       
                </Toolbar>
            </Grid>
            <Footer />
        </div>
    )
}

export default memo(Home);