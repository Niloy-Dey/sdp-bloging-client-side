import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItem =      <>
    <li><Link className="btn btn-ghost" to="/home">Home</Link></li>
    <li><Link className="btn btn-ghost" to="/blog">Blog</Link></li>
    <li><Link  className="btn btn-ghost" to="/contract">Contract</Link></li>
    <li><Link className="btn btn-ghost" to="/login">Log in</Link></li>
    
    </>

    return (
        <div class="navbar bg-blue-50 shadow-lg fixed top-0 z-50 ">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                       {menuItem}
                    </ul>
                </div>
            </div>
            <div class="navbar-center  ">
                
            </div>
            <div class="navbar-end list-none flex justify-around ">
               {menuItem}               
            </div>
        </div>
    );
};

export default Navbar;