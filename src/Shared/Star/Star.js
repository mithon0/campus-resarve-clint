import React from 'react';
import { AiFillStar,AiOutlineStar, } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
const Star = ({ratings}) => {

    const ratingStar =Array.from({length:5},(elm,index)=>{
        let number = 4;

        return(
            <span key={index}>
                {
                    ratings >= index+1 ? <AiFillStar className='text-orange-500'/> 
                    : ratings >= number ? <BsStarHalf className='text-orange-500'/> :
                   <AiOutlineStar className='text-orange-500'/> 
                }
            </span>
        )
    })

    

    return (
       <div className='flex'>
        {ratingStar}
       </div>
    );
};

export default Star;