import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const singleUser = useLoaderData();
    
    return (
        <div>
            <h1 className="my-6 text-center">Details of {singleUser.name}</h1>
            <h1 className="my-6 text-center">Details of {singleUser.website}</h1>
            <h1 className="my-6 text-center">Details of {singleUser.email}</h1>
            <h1 className="my-6 text-center">Details of {singleUser.userName}</h1>
        </div>
    );
};

export default UserDetails;