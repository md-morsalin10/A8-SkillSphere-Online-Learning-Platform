import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const links = <>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/courses'}>Courses</Link></li>
        <li><Link href={'/profile'}>Profile</Link></li>
    </>
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}

                        </ul>
                    </div>
                    <h2 className='text-[#4F46E5] text-2xl font-bold'>SkillSphere</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#475569]">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='btn mx-2 btn-primary'>Login</button>
                    <button className='btn'>Register</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;