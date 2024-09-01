import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AiTwotoneMail } from "react-icons/ai";

const Login = () => {


      // Replace
      const location = useLocation()
      const navigate = useNavigate()


      const from = location.state?.from?.pathname || "/"
      console.log('state in the location', location.state)
      const [showPassword, setShowPassword] = useState(false)

      const [disabled, setDisabled] = useState(true)

      const { signIn } = useContext(AuthContext)


      const handlLogin = event => {

            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            // const captcha = form.captcha.value;
            console.log(email, password)

            signIn(email, password)
                  .then(result => {
                        const user = result.user;
                        console.log(user)
                        Swal.fire({
                              position: "top-center",
                              icon: "success",
                              title: "Login Successfuly!",
                              showConfirmButton: false,
                              timer: 1500
                        });

                        navigate(from, { replace: true });

                  })
                  .catch(error => console.log(error))
      }




      // Captcha From Start
      useEffect(() => {
            loadCaptchaEnginge(4);
      }, [])

      const handleValidateCaptcha = (e) => {
            const user_captcha_value = e.target.value;
            if (validateCaptcha(user_captcha_value)) {
                  setDisabled(false)
            }
            else {
                  setDisabled(true)
            }
      }
      // Captcha From End
      return (
            <div>
                  <Helmet>
                        <title>Bistro Boss Restaurant | Login </title>
                  </Helmet>
                  <div className="featured-login hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">

                              <div className="card w-full lg:mr-[50px] max-w-sm  bg-base-100  text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 ">

                                    <form onSubmit={handlLogin} className="card-body">

                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email Address</span>
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

                                          <div className="form-control mt-3">
                                                <label className="label bg-white rounded-lg">
                                                      <LoadCanvasTemplate />
                                                </label>
                                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the text above" className="input input-bordered mt-4" required />



                                          </div>

                                          <div className="form-control mt-6">
                                                <input disabled={disabled} className="btn btn-secondary" type="submit" value="Login" />
                                          </div>

                                    </form>
                                    <p className="text-center mb-7 text-xl"><small>New Here ? <Link to="/register" className="text-green-700 font-semibold">Create an account</Link> </small></p>

                              </div>

                              <div className="text-center lg:text-right lg:mr-[100px]">

                                    <a href="#"><img src="https://i.ibb.co/QnyvHK1/authentication2.png" alt="authentication2" border="0" /> </a>

                              </div>

                        </div>
                  </div>
            </div>
      )
}
export default Login;



// const Login = () => {
//       return (
//             <div>

//             </div>
//       )
// }
// export default Login;