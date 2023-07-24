import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Profile = () => {
    const { user,updateUser } = useContext(AuthContext);
    const [newUser, setUser] = useState()

    useEffect(() => {
        fetch(`http://localhost:4000/user/${user.email}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);
    console.log(newUser);
    console.log(user);
    const updateUsers = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const photo = form.photo.value;
        const name = form.name.value;
        const gender = form.gender.value;
        const address = form.address.value;
        const number = form.number.value;
        console.log(email, photo, name, gender, address);
        const updateData = {
            email,
            photo,
            name,
            gender,
            address,
            number
        }
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('http://localhost:4000/updateusers', {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(updateData)
                })
                    .then(res => res.json())
                    .then(data => {
                        updateUser(name,photo)
                        Swal.fire('Profile updated success')
                    })

            }
        })



    }

    return (
        <div>
            <div className='w-1/2 bg-slate-400 mx-auto rounded-3xl'>

                <img src={user?.photoURL} alt="Shoes" className="rounded-full w-20 mx-auto" />

                <div className="text-center">
                    <h2 className="text-center text-xl font-bold">{user?.displayName}</h2>
                    <h3 className='divider font-bold underline'>About</h3>
                </div>
                <div className='mx-20 pb-20'>
                    <h1 className='font-bold'>Email:{user?.email}</h1>
                    <h1 className='font-bold'>Gender:{newUser?.gender}</h1>
                    <h1 className='font-bold'>Address:{newUser?.address}</h1>
                    <h1 className='font-bold'>PhoneNumber:{newUser?.number}</h1>


                    {/* <h1 className='font-bold'>PhoneNumber: {
                        !newUser.number? <><Link>Add</Link></> : <></>
                    }</h1> */}
                    {/* <h1 className='font-bold'>gender: {
                        !newUser.gender? <><Link>Add</Link></> : <p>{newUser.gender}</p>
                    }</h1>
                    <h1 className='font-bold'>Address: {
                        !newUser.address ? <><Link>Add</Link></> : <p>{newUser.address}</p>
                    }</h1> */}
                    <details className="collapse bg-base-200">
                        <summary className="collapse-title text-xl font-medium">Edit Profile</summary>
                        <div className="collapse-content">
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <form onSubmit={updateUsers}>
                                    <div className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input disabled name='email' defaultValue={user?.email} type="email" placeholder="email" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input name='name' defaultValue={user?.displayName} type="text" placeholder="Name" className="input input-bordered" />

                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">PhotoURL</span>
                                            </label>
                                            <input defaultValue={newUser?.photo} name='photo' type="text" placeholder="PhotoUrl" className="input input-bordered" />

                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Gender</span>
                                            </label>
                                            <input defaultValue={newUser?.gender} name='gender' type="gender" placeholder="Male or female" className="input input-bordered" />

                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Address</span>
                                            </label>
                                            <input defaultValue={newUser?.address} name='address' type="text" placeholder="Address" className="input input-bordered" />

                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Phone</span>
                                            </label>
                                            <input defaultValue={newUser?.number} name='number' type="text" placeholder="PhonNumber" className="input input-bordered" />

                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Update</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </details>
                </div>
            </div >
        </div >
    );
};

export default Profile;