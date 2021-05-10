import { Grid, Toolbar, Typography } from "@material-ui/core"
import { FC, memo } from "react"
import { CourseCard, Header } from "../../components";
import img1 from "../../assets/hero.jpeg";
import { nanoid } from "nanoid";

let courses = [
    { title: "Noorani Qaida", img: "", paragraph: "" },
    { title: "Nazra", img: "", paragraph: "", },
    { title: "Hifz e Quran", img: "", paragraph: "", },
    { title: "Tafseer e Quran", img: "", paragraph: "" }
]

const headerRoutes = [{ title: "My Courses", route: "/dashboard/student/mycourses" }, { title: "Available Courses", route: "/dashboard/student/availablecourses" }, { title: "Annousements", route: "/dashboard/student/annousements" }];
const StudentDashboard: FC<any> = () => {
    return (
        <Grid container >
            <Header headerRoutes={headerRoutes} />
            <Toolbar>
                {
                    courses.map((cours, index) => {
                        return (
                            <CourseCard title={cours.title} mediaImage={img1} key={nanoid()} />
                        )
                    })
                }
            </Toolbar>
            <Typography>
                Student Dashboard
            </Typography>
        </Grid>
    )
}

export default memo(StudentDashboard);