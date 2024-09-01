import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section className="mt-20">

            {/* Section Title Start */}
            <SectionTitle
                heading={"Check it out"}
                subHeading={"FROM OUR MENU"}>
            </SectionTitle>
            {/* Section Title End */}
            
            {/* Item Cart */}
            <div className="grid md:grid-cols-2 gap-10 lg:mx-20 p-3 mt-20">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>

            <button className="btn btn-outline border-0 border-b-4 mt-10 lg:ml-[680px] ml-28 text-black uppercase">View Full Menu</button>
        </section>

    );
};

export default PopularMenu;