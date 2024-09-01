import { FaBook, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const DashBoard = () => {
      const [cart] = useCart()
      return (
            <div className="flex">
                  <div className="w-64 min-h-screen bg-orange-400 text-xl">

                        <ul className="menu p-4">



                              <li className="mt-4">
                                    <NavLink to="/dashboard/adminHome">
                                          <FaHome></FaHome>
                                          Admin Home</NavLink>
                              </li>
                              <li className="mt-4">
                                    <NavLink to="/dashboard/order">
                                          <FaUtensils></FaUtensils>
                                          Add Items</NavLink>
                              </li>
                              <li className="mt-4">
                                    <NavLink to="/dashboard/cart">
                                          <FaShoppingCart></FaShoppingCart>
                                          My Cart  ( {cart.length} ) </NavLink>
                              </li>
                              <li className="mt-4">
                                    <NavLink to="/dashboard/manageItems">
                                          <FaList></FaList>
                                          Manage Items</NavLink>
                              </li>
                              <li className="mt-4">
                                    <NavLink to="/dashboard/bookings">
                                          <FaBook></FaBook>
                                          Manage Bookings</NavLink>
                              </li>

                              <li className="mt-4">
                                    <NavLink to="/dashboard/car">
                                          <FaUsers></FaUsers>
                                          All Users</NavLink>
                              </li>
                              <hr className="mt-10" />


                              <li className="mt-10">
                                    <NavLink to="/">
                                          <FaHome></FaHome>
                                          Home</NavLink>
                              </li>

                              <li className="mt-4">
                                    <NavLink to="/order/salad">
                                          <FaSearch></FaSearch>
                                          Menu</NavLink>
                              </li>
                              <li className="mt-4">
                                    <NavLink to="/order/contact">
                                          <FaEnvelope></FaEnvelope>
                                          Contact</NavLink>
                              </li>

                        </ul>
                  </div>

                  <div className="flex-1 p-10">
                        <Outlet></Outlet>
                  </div>
            </div>
      )
}
export default DashBoard;