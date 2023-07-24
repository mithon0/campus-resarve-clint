import React from 'react';
import TitleSection from '../Shared/TitleSections/TitleSection';

const Galery = () => {
    return (
        <div>
           <TitleSection
           header={""}
           subHeader={"Galery"}
           ></TitleSection> 
           <div className='grid md:grid-cols-2 sm:grid-cols-1'>
            <div className='h-96 w-[550px] mx-auto mb-5'>
                <img className='h-full w-[550px] ' src="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80" alt="" />
            </div>
            <div className='h-96 w-[550px] mx-auto mb-5'>
                <img className='h-full w-[550px]' src="https://images.unsplash.com/photo-1627556704243-5f0771d90783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
            <div className='h-96 w-[550px] mx-auto'>
                <img className='h-full w-[550px]' src="https://images.unsplash.com/photo-1496469888073-80de7e952517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" alt="" />
            </div>
            <div className='h-96 w-[550px] mx-auto'>
                <img className='h-full w-[550px]' src="https://images.unsplash.com/photo-1534009916851-7850ba974f9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="" />
            </div>
           </div>
        </div>
    );
};

export default Galery;