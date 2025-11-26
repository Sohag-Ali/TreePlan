import React from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';

import TreeCard from './TreeCard';
import Banner from '../Components/Banner';
import Tips from './Tips';


const Home = () => {
    const navigate = useNavigate();
        const treeData = useLoaderData();
        const popularData = treeData.slice(0,9);
    return (
        <div >
             <div className='my-3' data-aos='zoom-in' data-aos-delay="200" >
                       <Banner></Banner>
                    </div>
            <h1 className='font-bold text-3xl my-3 mt-8'>Top Rated Indoor Plants</h1>
            <hr  className='mb-5'/>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {
                    
                     popularData.map(tree => <TreeCard key={tree.plantId} tree={tree}></TreeCard>)
                }
            </div>
            <button onClick={() => navigate('/plants')}className='overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer btn my-6 md:my-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white border-none w-full sm:w-auto px-8'>
                Show All Trees</button>
                <div>
                    <Tips></Tips>
                </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;