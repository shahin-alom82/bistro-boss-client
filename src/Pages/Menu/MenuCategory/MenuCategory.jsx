import { Link } from "react-router-dom";
import MenuItem from "../../../Components/MenuItem/MenuItem";
import MenuCover from "../MenuCover/MenuCover";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="mt-10">
            {title && <MenuCover img={img}
                title={"Our menu"}
            ></MenuCover>}
            <div className="grid md:grid-cols-2 gap-10 lg:mx-20 p-3 mt-20">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="lg:ml-[680px] ml-24 mt-6">
                <Link to={`/order`}>
                    <button className="btn btn-outline border-0 border-b-4 text-black uppercase">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;