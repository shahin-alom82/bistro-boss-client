import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


    const navOptions = <>

        <Link to="/"><li>Home</li></Link>
        <Link to="/menu"><li>Our Menu</li></Link>
        <Link to="/order"><li>Order Food</li></Link>



        <Link to="/dashboard/cart">
            <div className="flex mt-1">
                <FaShoppingCart></FaShoppingCart>
                <div className=" badge badge-secondary lg:ml-3 h-6 ">+ {cart.length}</div>
            </div>
        </Link>


        {
            user ? <>
                <button onClick={handleLogOut}>LogOut</button>
            </> : <>
                <Link to="/login"><li>Login</li></Link>
            </>
        }

    </>

    return (
        <div>
            <>
                <div className="navbar bg-black fixed z-10 bg-opacity-35 text-white  h-24 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] text-black p-2 shadow bg-base-100 rounded-box w-52">
                                {navOptions}
                            </ul>
                        </div>
                        <a className="text-xl lg:text-3xl">Bistro Boss</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal gap-10 text-xl px-1">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Button</a>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Header;