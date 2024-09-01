import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../SectionTitle/SectionTitle";

const Cart = () => {
      const [cart, refetch] = useCart();
      const totalPrice = cart.reduce((total, item) => total + item.price, 0);
      const axiosSecure = useAxiosSecure();


      const handleDelete = id => {
            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                  if (result.isConfirmed) {



                        axiosSecure.delete(`/carts/${id}`)
                              .then(res => {
                                    if (res.data.deletedCount > 0) {
                                          refetch()
                                          Swal.fire({
                                                title: "Deleted!",
                                                text: "Your file has been deleted.",
                                                icon: "success"
                                          });
                                    }
                              })
                  }
            });
      }





      return (
            <div>
                  <div className="flex justify-between text-rose-500">
                        <h1 className="text-3xl">Total item : {cart.length}</h1>
                        <h1 className="text-3xl">Total Price : {totalPrice}</h1>
                        <button className="bg-rose-500 text-white h-12 rounded-lg w-24">Pay</button>
                  </div>


                  <div className="overflow-x-auto mt-10">
                        <table className="table bg-orange-400  w-full">
                              {/* head */}
                              <thead className="text-xl">
                                    <tr className=" h-20 text-white font-medium">
                                          <th>
                                                Number
                                          </th>
                                          <th>Image</th>
                                          <th>Name</th>
                                          <th>Price</th>
                                          <th>Action</th>
                                    </tr>
                              </thead>
                              <tbody className="bg-orange-200">
                                    {
                                          cart.map((item, index) => <tr key={item._id}>
                                                <th className="text-xl">
                                                      {index + 1}
                                                </th>
                                                <td>
                                                      <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                  <div className="mask mask-squircle h-20">
                                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </td>
                                                <td className="text-xl">
                                                      {item.name}
                                                </td>
                                                <td className="text-xl">${item.price}</td>
                                                <th>
                                                      <button
                                                            onClick={() => handleDelete(item._id)}
                                                            className="text-2xl">
                                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                                      </button>
                                                </th>
                                          </tr>)
                                    }


                              </tbody>
                        </table>
                  </div>
            </div>
      )
}
export default Cart;








