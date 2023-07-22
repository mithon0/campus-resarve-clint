import React from 'react';
import Star from '../../Shared/Star/Star';

const TopCollages = ({collages}) => {
  const {college_image,admission_date,number_of_research,college_rating}=collages;
    return (
        <div>
             <div className="card w-96 glass mt-5 mx-auto">
  <figure><img className='w-96 h-52' src={college_image} alt="car!"/></figure>
  <div className="card-body">
  <Star ratings={college_rating}></Star>
                 <h3>Admission date: {admission_date}</h3>
                 <h3>Number of research: {number_of_research}</h3>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default TopCollages;