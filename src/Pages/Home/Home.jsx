import { Helmet } from "react-helmet-async";
import PopularMenu from "../../Components/PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Testimonials from "./Testimonials/Testimonials";
const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro Boss Restaurant | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;