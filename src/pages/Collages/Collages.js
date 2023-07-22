import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Star from '../../Shared/Star/Star';


const Collages = () => {
    const collage=useLoaderData()
    console.log(collage);
    return (
        <div>
          <h1 className='text-center text-2xl font-bold'>All Collages</h1>  
          <div className='divider w-60 text-center mx-auto'></div>
          <div className='grid grid-cols-3'>
            {
                collage.map(c=><div className="card w-96 mt-5 mx-auto glass">
                <figure><img className='w-96 h-52' src={c.college_image} alt="car!"/></figure>
                <div className="card-body">
                  <h2 className="card-title">{c.college_name}</h2>
                 <Star ratings={c.college_rating}></Star>
                 <h3>Admission date: {c.admission_date}</h3>
                 <h3>Number of research: {c.number_of_research}</h3>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                  </div>
                </div>
              </div>)
            }
          </div>
        </div>
    );
};

export default Collages;