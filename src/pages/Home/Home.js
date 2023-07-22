import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import TitleSection from '../../Shared/TitleSections/TitleSection';
import TopCollages from '../TopCollages/TopCollages';
import { Link } from 'react-router-dom';
import Depertments from '../Depertments/Depertments';

const Home = () => {
    const [collages,setCollages]=useState([]);
    const [departments,setDepartments]=useState([])
    const collage =collages.slice(0,4)
    useEffect(()=>{
        fetch('collage.json')
        .then(res=>res.json())
        .then(data=>setCollages(data))
    },[]);
    useEffect(()=>{
        fetch('depertment.json')
        .then(res=>res.json())
        .then(data=>setDepartments(data))
    })

    console.log(collages);
    return (
        <div>
           <Banner></Banner>
           <TitleSection
           header={"Top"}
           subHeader={"Collages"}
           ></TitleSection>
          {/* Todo top collage card */}

          <div className='grid grid-cols-3 '>
          {
            collage.map(collage=><TopCollages
            collages={collage}
            ></TopCollages>)
          }
         
          </div>
          <div className='flex justify-center'>
          <Link to="/collages" className='btn btn-primary btn-outline'>See All</Link>
          </div>

          <TitleSection
           header={"Top"}
           subHeader={"Depertment"}
           ></TitleSection>
           {/* todo add dipertement */}

         
           
    <div className="overflow-x-auto mx-10 my-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Head</th>
        <th>Phone</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
    {
                departments.map((d,index)=><Depertments
                depertments={d}
                index={index}
                ></Depertments>)
            }
      
    </tbody>
  </table>
</div>


          
        </div>
    );
};

export default Home;