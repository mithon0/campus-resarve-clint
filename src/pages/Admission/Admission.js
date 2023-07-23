import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Admission = () => {
    const collages = useLoaderData();
    const {user}=useContext(AuthContext)
    console.log(collages);
    const submitfromHandler =(e)=>{
        e.preventDefault();
        
        const form =e.target;
        const name =form.name.value;
        const subject =form.subject.value;
        const email =form.email.value;
        const phone =form.phone.value;
        const address =form.address.value;
        const date =form.date.value;
        const photo =form.photo.value;
        const id =form.id.value;
        const collage =form.collage.value;
        const candidateData ={name,
            subject,
            email,
            phone,
            address,
            date_of_birth:date,
            photo,
            collage,
           collage_id: id}
            console.log(candidateData);
        fetch('http://localhost:4000/admission',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(candidateData)
        })
        .then(res=>res.json())
        .then(data=>{
              
        });
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })

    }

    return (
        <div>
            <Helmet
                title='Admission'
            ></Helmet>
            <h1 className='text-center text-4xl font-bold underline mb-10'>Admission Aviliable for this collages now!</h1>
            <p className='text-xs'>(Note:Click the collage name to submit admission from)</p>

            {
                collages.map(c => <><details className="collapse uppercase bg-base-200">
                    <summary className="collapse-title text-xl font-medium">{c.college_name}</summary>
                    <div className="collapse-content">
                        {/* containt */}
                        <form onSubmit={submitfromHandler}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Candidate Name</span>
                                    </label>
                                    <input name='name' defaultValue={user.displayName}  type="text" placeholder="Candidate Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input name='subject'  type="text" placeholder="Subject" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Candidate Email</span>
                                    </label>
                                    <input disabled name='email' defaultValue={user.email} type="email" placeholder="Candidate Email" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Candidate Phone number</span>
                                    </label>
                                    <input name='phone' type="text" placeholder="Candidate Phone number" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input name='address' type="text" placeholder="Address" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">date of birth</span>
                                    </label>
                                    <input name='date' type="date" placeholder="date of birth" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoUrl</span>
                                    </label>
                                    <input name='photo' type="text" placeholder="PhotoURL" className="input input-bordered" />
                                    <input name='id' type="text" disabled defaultValue={c._id} className="input input-bordered text-white" />
                                    <input name='collage' type="text" disabled defaultValue={c.college_name} className="input input-bordered text-white" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </details></>)
            }
        </div>
    );
};

export default Admission;