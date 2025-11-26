import React from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';

import TreeCard from './TreeCard';
import Banner from '../Components/Banner';


const Home = () => {
    const navigate = useNavigate();
        const skillData = useLoaderData();
        const popularData = skillData.slice(0,8);
    return (
        <div>
             <div className='my-3' data-aos='zoom-in' data-aos-delay="200" >
                       <Banner></Banner>
                    </div>
            <h1 className='font-bold text-2xl my-3'>Popular Books</h1>
            <hr  className='mb-5'/>
            <div className='grid grid-cols-3 gap-5'>
                {
                    
                     popularData.map(skill => <TreeCard key={skill.skillId} skill={skill}></TreeCard>)
                }
            </div>
            <button onClick={() => navigate('/book')}className='overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer btn my-6 md:my-8 bg-gradient-to-r from-[#3f51ff] to-[#8a00ff] text-white border-none w-full sm:w-auto px-8'>
                Show All Books</button>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;