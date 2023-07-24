import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const [show,setShow]=useState(true);

    const {user,signupEmailPass,updateUser}=useContext(AuthContext)
    console.log(user);
    const navigate =useNavigate();
    const location =useLocation();
    const from =location.state?.from?.pathname || "/";
    const submitHandler =(e)=>{
        e.preventDefault();
        const fom =e.target;
        const name =fom.name.value;
        const photo =fom.photo.value;
        const email =fom.email.value;
        const password =fom.password.value;
        console.log(name,photo,email,password);
      const user ={name:name ,photo,email}

        signupEmailPass(email,password)
        .then(res=>{
            console.log(res.user);
            updateUser(name,photo)
            .then(res=>{
                fetch('https://campus-reserve-server.vercel.app/users',{
                  method:"POST",
                  headers:{
                    "content-type":"application/json"
                  },
                  body:JSON.stringify(user)
                })
                .then(res=>res.json())
                .then(data=>console.log(data))


                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'SignUp Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate(from,{replace:true})
            })
            .catch(err=>{
                console.log(err.message);
            })

        })
        .catch(err=>console.log(err.message))


    }
    const showPass =()=>{
        if(show===true){
            setShow(false)
        }else{
            setShow(true)
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200 lg:px-44">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
             <form onSubmit={submitHandler}>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Full Name</span>
                </label>
                <input name='name' type="text" placeholder="Full name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input name='photo' type="text" placeholder="PhotoUrl" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type={!show ?"text":"password"} placeholder="password" className="input input-bordered" />
                <label className="label">
                <input onClick={showPass} type="checkbox"  className="checkbox checkbox-primary" />
                  <p>See PassWord</p>
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary">SignUp</button>
              </div>
              
             </form>
              <div>
                  <p>Already have an Account?<Link to='/login' className='text-primary underline'>Login</Link></p>
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
    );
};

export default SignUp;