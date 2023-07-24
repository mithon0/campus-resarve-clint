import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const MyCollage = () => {
    // const [a, setAdmission] = useState();
    // const { user } = useContext(AuthContext)
    // useEffect(() => {
    //     fetch(`https://campus-reserve-server.vercel.app/admission/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setAdmission(data))
    // })

    // console.log(a);

    const a =useLoaderData()
    
    return (
        <div>
            <Helmet
                title='my collage'
            ></Helmet>
            <h1 className='text-center'>wellcome to my collage</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto mt-5'>
               {
                a?<></>:<p className='text-red text-center'>Please fillup the addmission form</p>
               }
                    
                       { a.map(a=><div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={a.photo} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{a.name}</h2>
                                {/* <p>Email: {a?.email}</p> */}
                                <p><span className='font-bold'>Subject:</span> {a.subject}</p>
                            
                                <p><span className='font-bold'>Phone:</span> {a.phone}</p>
                                <p><span className='font-bold'>Address:</span> {a.address}</p>
                                <p><span className='font-bold'>Date Of Birth:</span>{a.date_of_birth}</p>
                                <p><span className='font-bold'>Collage:</span>{a.collage}</p>
                                
                            </div>
                        </div>)}

                   
              
            </div>
        </div>
    );
};

export default MyCollage;