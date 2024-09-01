import { Helmet } from 'react-helmet-async';
import MenuCover from './MenuCover/MenuCover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')

    return (
        <div>

            <Helmet>
                <title>Bistro Boss Restaurant | Our Menu </title>
            </Helmet>

            <div className='pb-10'>
                {/* Menu Cover */}
                <MenuCover
                    img={menuImg}
                    title={"Our menu"}
                ></MenuCover>

                {/* Main Cover */}
                <section className="mt-10">
                    {/* Section Title */}
                    <SectionTitle
                        heading={"Don't miss"}
                        subHeading={"TODAY'S OFFER"}
                    >
                    </SectionTitle>
                    {/* offered Menu Items */}
                    <MenuCategory items={offered}></MenuCategory>
                    {/* dessert Menu Items */}
                    <MenuCategory items={dessert} title={"dessert"} img={dessertImg}></MenuCategory>
                    {/* soup Menu Items */}
                    <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
                    {/* salad Menu Items */}
                    <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
                    {/* pizza Menu Items */}
                    <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>

                </section>

            </div>

        </div>
    );
};

export default Menu;