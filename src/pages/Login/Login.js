import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle,FaGithub } from "react-icons/fa";
const Login = () => {
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
          <input type="checkbox"  className="checkbox checkbox-primary" />
            <p>See PassWord</p>
          </label>
        </div>
        <div className="form-control mt-3">
          <button className="btn btn-primary">Login</button>
        </div>
        
        <div>
            <p>Wanna Create an Account?<Link to='/signup' className='text-primary underline'>SignUp</Link></p>
        </div>
        <div className='divider'>Or</div>
        <div className='mx-auto flex gap-8'>
            <button className='rounded-full btn btn-outline btn-primary'><FaGoogle/></button>
            <button className='rounded-full btn btn-outline btn-secondary'><FaGithub/></button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;