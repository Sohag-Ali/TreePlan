// SkillCard.jsx
import React from "react";

import { NavLink } from "react-router";


const TreeCard = ({tree}) => {
    return (
       <div className="bg-base-100 shadow-sm rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col" data-aos='zoom-in' data-aos-delay="200">
            {/* Image */}
            <img
                src={tree.image}
                alt={tree.plantName}
                className="h-48 w-full object-cover"
            />

            {/* Card Content */}
            <div className="p-4 flex flex-col flex-grow">
                {/* Skill Name */}
                <h2 className="animate__animated animate-pulse text-xl font-semibold mb-2">{tree.plantName}</h2>

                {/* Rating and Price */}
                <div className="flex items-center justify-between mb-4">
                    {/* Rating */}
                    <div className="flex items-center">
                        <span className="flex text-yellow-400 mr-2">
                            {Array.from({ length: Math.floor(tree.rating) }).map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-4 h-4 fill-current"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                                </svg>
                            ))}
                        </span>
                        <span className="text-gray-600">{tree.rating.toFixed(1)}</span>
                    </div>

                    {/* Pric */}
                    <p className="text-gray-700 font-bold text-xl">${tree.price}</p>
                </div>

                {/* View Details Button */}
                <NavLink to={`/Details/${tree.plantId}`} className="mt-auto bg-gradient-to-r from-green-300 to-emerald-400 text-white  px-4 py-2 rounded hover:bg-gradient-to-r hover:from-green-400 hover:to-emerald-500
           hover:scale-105 transition-all duration-300">
                    View Details
                </NavLink>
            </div>
        </div>
    );
};

export default TreeCard;