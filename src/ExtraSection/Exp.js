import React from 'react';

const Exp = () => {
    return (
        <div className='mx-20 mb-20'>
           <div className='divider w-1/2 mx-auto mb-20'></div>  
           <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
            <div className='mx-4'>
                <h1 className='text-center text-6xl font-bold text-gray-600 mb-5'>Study</h1>
                <p className='text-center mb-5 '>Join 26,100+ students from 130 countries.</p>
                <div className='flex justify-center'><button className='btn btn-outline text-white bg-green-900 '>Admission</button></div>
            </div>
            <div className='mx-4'>
                <h1 className='text-center text-6xl font-bold text-gray-600 mb-5'>Work</h1>
                <p className='text-center mb-5 '>Grow your career at a top research university.</p>
                <div className='flex justify-center'><button className='btn btn-outline text-white bg-green-900 '>Job posting</button></div>
                </div>
            <div className='mx-4'>
                <h1 className='text-center text-6xl font-bold text-gray-600 mb-5'>Give</h1>
                <p className='text-center mb-5 '>Support our students and research.</p>
                <div className='flex justify-center'><button className='btn btn-outline px-7 text-white bg-green-900 '>Donate</button></div>
            </div>
            <div className='mx-4'>
                <h1 className='text-center text-6xl font-bold text-gray-600 mb-5'>Play</h1>
                <p className='text-center mb-5 '>With 15 athletic teams, there is always a game to watch.</p>
                <div className='flex justify-center'><button className='btn px-7 btn-outline text-white bg-green-900 '>Huskies</button></div>
            </div>
           </div>
           
        </div>
    );
};

export default Exp;