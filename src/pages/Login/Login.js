import React, { useContext, useState } from 'react';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {
    const [show, setShow] = useState(true);
    const { login,user } = useContext(AuthContext)
    const navigate =useNavigate();
    const location =useLocation();
    const from =location.state?.from?.pathname || "/";


console.log(user);
    const loginHandler = (e) => {
        e.preventDefault();
        const fom = e.target;
        const email = fom.email.value;
        const password = fom.password.value;
        console.log(email, password);
        login(email,password)
        .then(res=>{
            console.log(res.user);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'login Successfully',
                showConfirmButton: false,
                timer: 1500
              });
              navigate(from,{replace:true})
        })
        .catch(err=>{
            console.log(err.message);
        })

    }


    const showPass = () => {
        if (show === true) {
            setShow(false)
        } else {
            setShow(true)
        }
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 lg:px-44">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={loginHandler}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type={!show ? "text" : "password"} placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <input onClick={showPass} type="checkbox" className="checkbox checkbox-primary" />
                                        <p>See PassWord</p>
                                    </label>
                                </div>
                                <div className="form-control mt-3">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>

                            <div>
                                <p>Wanna Create an Account?<Link to='/signup' className='text-primary underline'>SignUp</Link></p>
                            </div>
                            <div className='divider'>Or</div>
                            <div className='mx-auto flex gap-8'>
                                <button className='rounded-full btn btn-outline btn-primary'><FaGoogle /></button>
                                <button className='rounded-full btn btn-outline btn-secondary'><FaGithub /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;