import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>All Toys</a></li>
                        <li><a>My Toys</a></li>
                        <li><a>Add A Toys</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Get Toy Cars</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>All Toys</a></li>
                    <li><a>My Toys</a></li>
                    <li><a>Add A Toys</a></li>
                    <li><a>Blog</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar">
                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;