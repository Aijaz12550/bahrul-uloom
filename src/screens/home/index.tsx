import { FC, memo } from "react";
import { Footer, Header, Hero, CourseCard } from "../../components";
import { Grid, Toolbar, Typography } from "@material-ui/core"
import { styles } from "./style";
import { nanoid } from "nanoid";
import profileImage from "../../assets/profile.jpeg";
import img1 from "../../assets/hero.jpeg"

const headerRoutes = [{ title: "Login", route: "/login" }, { title: "Support", route: "/support" }]

let courses = [
    { title: "Noorani Qaida", img: "", paragraph: "" },
    { title: "Nazra", img: "", paragraph: "", },
    { title: "Hifz e Quran", img: "", paragraph: "", }, 
    { title: "Tafseer e Quran", img: "", paragraph: "" }
]
const Home: FC<any> = () => {

    const classes = styles();
    return (
        <div>
            <Header headerRoutes={headerRoutes} />
            <Grid container style={{ minHeight: "calc( 100vh - 200px)" }}>
                <Hero />
                <Toolbar />
                <Typography variant="h4">
                    Available Courses
                    </Typography>
                <Toolbar className={classes.cardContainer}>

                    {
                        courses.map((cours, index) => {
                            return (
                                <CourseCard title={cours.title} mediaImage={img1} key={nanoid()} />
                            )
                        })
                    }

                </Toolbar>
                <Toolbar />
                <Typography variant="h4">
                    Available Teachers
                    </Typography>
                <Toolbar className={classes.cardContainer}>

                    {
                        ["Qari Usman", "Qari Haider", "xyz", "abc",].map((cours, index) => {
                            return (

                                <CourseCard title={cours} mediaImage={profileImage} key={nanoid()} />
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