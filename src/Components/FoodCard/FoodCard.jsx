

import React from "react";
import Swal from "sweetalert2";

import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {

    const { name, image, recipe, price, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart();


    const handleAddToCart = () => {
        if (user && user.email) {
            // send cart
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            };

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: `${name} Added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch the Cart
                        refetch();
                    }
                    // Optionally, you can show a success message here
                })
                .catch(error => {
                    console.error(error);
                    // Optionally, you can show an error message here
                });
        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };

    return (
        <div>
            <div className="card text-black lg:h-[500px]  border-4 border-amber-400 shadow-2xl shadow-orange-400">
                <img className="rounded-t-xl border-4 border-t border-l border-r border-amber-400" src={image} alt="Food" />
                <p className="absolute bg-black p-1 text-white right-0 bg-opacity-50 rounded mt-3 mr-3">$ {price}</p>
                <div className="p-4">
                    <h2 className="lg:text-2xl text-xl text-black font-semibold mt-3">{name}</h2>
                    <p className="text-[16px] mt-4 text-gray-700">{recipe}</p>
                    <div className="card-actions lg:ml-28 ml-16 lg:mt-2 mt-4">
                        <button onClick={handleAddToCart} className="btn btn-outline border-amber-400 border-b-8 lg:text-md text-[14px]  border-l-4 text-black uppercase bg-slate-100">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;



