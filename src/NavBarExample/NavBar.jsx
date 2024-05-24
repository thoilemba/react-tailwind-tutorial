import React from "react";
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
  return <div className='flex bg-green-600 items-center py-2 pl-6 pr-12'>
    {/* return <div className='nav'> */}

    <Link to="/" className='text-white text-lg md:text-2xl'>Site Name</Link>
    <ul className="flex space-x-3 md:space-x-12 w-3/4 text-white justify-center text-center ">
      <li className="p-2 hover:bg-gray-500 rounded-md">
        <NavLink to="/" className={({ isActive }) => `hover: border-b-2 ${isActive ? " border-white-600" : " border-transparent"}`}>Home</NavLink>
      </li>
      <li className="p-2 hover:bg-gray-500 rounded-md">
        <NavLink to="/product" className={({ isActive }) => `border-b-2 ${isActive ? " border-white-600" : " border-transparent"}`}>Products</NavLink>
      </li>
      <li className="p-2 hover:bg-gray-500 rounded-md">
        <NavLink to="/blog" className={({ isActive }) => `border-b-2 ${isActive ? " border-white-600" : " border-transparent"}`}>Blogs</NavLink>
      </li>
      <li className="p-2 hover:bg-gray-500 rounded-md">
        <NavLink to="/paginatedimages1" className={({ isActive }) => `border-b-2 ${isActive ? " border-white-600" : " border-transparent"}`}>Paginated Images 1</NavLink>
      </li>
      <li className="p-2 hover:bg-gray-500 rounded-md">
        <NavLink to="/paginatedimages2" className={({ isActive }) => `border-b-2 ${isActive ? " border-white-600" : " border-transparent"}`}>Paginated Images 2</NavLink>
      </li>
    </ul>


  </div>;
};

export default NavBar;
