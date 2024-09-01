import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash, FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiTwotoneMail } from "react-icons/ai";

const Register = () => {
      const [showPassword, setShowPassword] = useState(false)

      const from = location.state?.from?.pathName || "/"
      const Navigate = useNavigate()

      const { createUser } = useContext(AuthContext)

      const handleRegister = event => {
            event.preventDefault()
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            const remember = form.remember.value;
            console.log(name, email, password, remember)






            createUser(email, password)

                  .then(result => {

                        const user = result.user;
                        console.log(user)

                        Navigate(from, { replace: true })

                  })
                  .catch(error => console.log(error))
      }



      return (
            <div>
                  <div>
                        <Helmet>
                              <title>Bistro Boss Restaurant | Register </title>
                        </Helmet>
                        <div className="featured-login hero min-h-screen bg-base-200">
                              <div className="hero-content flex-col lg:flex-row-reverse">

                                    <div className="card w-full max-w-sm  bg-base-100 lg:mr-[50px] text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200">
                                          <form onSubmit={handleRegister} className="card-body">

                                                <div className="form-control">
                                                      <label className="label">
                                                            <span className="label-text">User Name</span>
                                                            <span className="absolute mt-[85px] right-[50px]" >
                                                                  <FaRegUser />
                                                            </span>
                                                      </label>
                                                      <input type="text" name="name" placeholder="User Name" className="input input-bordered" ></input>
                                                </div>

                                                <div className="form-control">
                                                      <label className="label">
                                                            <span>Email Address</span>
                                                            <span className="absolute mt-[85px] right-[50px]" >
                                                                  <AiTwotoneMail />
                                                            </span>
                                                      </label>
                                                      <input type="email" name="email" placeholder="Email Address" className="input input-bordered" required />
                                                </div>


                                                <div className="form-control">
                                                      <label className="label">
                                                            <span className="label-text">Password</span>
                                                      </label>
                                                      <input type={showPassword ? "text" : "password"} name="password" required placeholder="Password" className="input input-bordered" />
                                                      <span onClick={() => setShowPassword(!showPassword)} className="absolute mt-[51px] right-[50px]" >
                                                            {
                                                                  showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                                            }
                                                      </span>
                                                </div>

                                                <div className="flex items-start mt-3">
                                                      <div className="flex items-start">
                                                            <div className="flex items-center h-5">
                                                                  <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                                            </div>
                                                            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accept your termp condition?</label>
                                                      </div>
                                                </div>

                                                <div className="form-control mt-4">
                                                      <input className="btn btn-secondary text-md" type="submit" value="Register" />
                                                </div>

                                          </form>
                                          <p className="text-center mb-7 text-xl"><small>Already Have an Account ? <Link to="/login" className="text-green-700 font-semibold">Login</Link> </small></p>

                                    </div>

                                    <div className="text-center lg:text-right lg:mr-[100px]">

                                          <a href="#"><img src="https://i.ibb.co/QnyvHK1/authentication2.png" alt="authentication2" border="0" /> </a>

                                    </div>

                              </div>
                        </div>
                  </div>
            </div>
      )
}
export default Register;