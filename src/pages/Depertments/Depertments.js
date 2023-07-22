import React from 'react';

const Depertments = ({depertments,index}) => {
    const {name,head,location,phone}=depertments;
    const num =index+1;
    return (
        
             <tr>
        <th>{num}</th>
        <td>{name}</td>
        <td>{head}</td>
        <td>{phone}</td>
        <td>{location}</td>
      </tr>
       
    );
};

export default Depertments;