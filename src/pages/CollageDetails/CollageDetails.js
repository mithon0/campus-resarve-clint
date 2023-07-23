import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaCheck, FaTimes } from "react-icons/fa";
const CollageDetails = () => {
    const collage = useLoaderData()
    console.log(collage);
    const { college_image, admission_date, college_name, facilities } = collage;

    const event = facilities.events;
    console.log(facilities.sports);
    const sport = facilities.sports
    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={college_image} className="max-w-sm rounded-lg shadow-2xl" alt="" />
                    <div>
                        <h1 className="text-5xl font-bold">{college_name}</h1>
                        <p className="py-6">Admission: {admission_date}</p>
                        <div className='grid grid-cols-2'>
                            <div>
                                <h1 className='underline text-2xl font-semibold'>Events</h1>
                                {
                                    event.map(e => <>
                                        <ul>
                                            <li>
                                                {e.event_name}
                                            </li>
                                            <li>
                                                {e.event_date}
                                            </li>
                                        </ul>
                                    </>)
                                }
                            </div>
                            <div>
                                <h1 className='underline text-2xl font-semibold'>Sports</h1>
                                {
                                    sport.map(s => <>
                                        <ul className='flex gap-5'>
                                            <li>
                                                {s.sport_name}
                                            </li>
                                            <li>
                                                {
                                                    s.available === true ? <FaCheck className='text-green-600' /> : <FaTimes className='text-red-600' />
                                                }
                                            </li>
                                        </ul>
                                    </>)
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollageDetails;