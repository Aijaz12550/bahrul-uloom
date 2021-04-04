import { FC, memo } from "react";
import { Header, Hero } from "../../components";


const Home:FC<any> = () => {
    return(
        <div>
            <Header />
            <Hero />
        </div>
    )
}

export default memo(Home);