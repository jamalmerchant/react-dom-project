import React from 'react';
import {  Link, useLoaderData } from 'react-router-dom';

const About = () => {
  const users = useLoaderData();
  console.log(users);
  
    return (
        <div className="mx-10 grid grid-cols-3 gap-5">
           {users.map((user) => (
              <div key={user.id} className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{user.name}</h2>
                    <p>{user.email}</p>
                    <div className="card-actions justify-end">
                      <Link to={`/details/${user.id}` } className="btn btn-primary">
                      Show details</Link>
                    </div>
                  </div>
                </div>
              ))}
                  
          
    </div>
    );
};

export default About;