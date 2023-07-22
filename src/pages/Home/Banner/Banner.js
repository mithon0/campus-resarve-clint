import React from 'react';
import { FaSistrix } from "react-icons/fa";
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/ZKHdbwF/vasily.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    <input type="text" placeholder="Search collages" className="input input-bordered w-full max-w-xs text-black" />
    <button className='btn  btn-secondary'><FaSistrix className='text-xl'/></button>
      <p className="mb-5 mt-10">At Case Western Reserve University, we think big.
But we don't just think, we do.
On campus and around the world, we explore and discover, engage and invent.
Most of all, we make a difference—especially when it appears impossible.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;