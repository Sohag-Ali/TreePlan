import React from 'react';
import { Outlet, useLoaderData } from 'react-router';

import TreeCard from './TreeCard';

const Home = () => {
        const skillData = useLoaderData();
    return (
        <div>
            <h1 className='font-bold text-2xl my-3'>Popular Books</h1>
            <hr  className='mb-5'/>
            <div className='grid grid-cols-3 gap-5'>
                {
                    
                     skillData.map(skill => <TreeCard key={skill.skillId} skill={skill}></TreeCard>)
                }
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;