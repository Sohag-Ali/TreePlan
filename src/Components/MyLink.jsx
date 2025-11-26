import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({to,className, children}) => {
    return (
       <NavLink
       to={to}
       className={({isActive}) => isActive ? "text-emerald-400 font-bold  underline hover:scale-105 transition-all duration-300 " : `${className} font-bold`
       }
       >
        {children}
       </NavLink>
    );
};

export default MyLink;