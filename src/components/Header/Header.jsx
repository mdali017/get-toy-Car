import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'><li className="btn btn-ghost">Home</li></Link>
                        <Link to='/all-toy'><li className="btn btn-ghost">All Toys</li></Link>
                        <Link to='/my-toy'><li className="btn btn-ghost">My Toys</li></Link>
                        <Link to='/add-a-toy-car'><li className="btn btn-ghost">Add A Toys</li></Link>
                        <Link to='/blog'><li className="btn btn-ghost">Blog</li></Link>
                        {/* <Link to='/login'><li className="btn btn-ghost">Login</li></Link> */}
                        {/* <Link to='/register'><li className="btn btn-ghost">Register</li></Link> */}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Get Toy Cars</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to='/'><li className="btn btn-ghost">Home</li></Link>
                    <Link to='/all-toy'><li className="btn btn-ghost">All Toys</li></Link>
                    <Link to='/my-toy'><li className="btn btn-ghost">My Toys</li></Link>
                    <Link to='/add-a-toy-car'><li className="btn btn-ghost">Add A Toys</li></Link>
                    <Link to='/blog'><li className="btn btn-ghost">Blog</li></Link>
                    {/* <Link to='/login'><li className="btn btn-ghost " >Login</li></Link> */}
                    {/* <Link to='/register'><li className="btn btn-ghost">Register</li></Link> */}
                    {
                        user ? <div>
                            <button onClick={handleLogOut} className="btn btn-ghost">Sign out</button>
                        </div> : <div>
                            <Link to='/login'><li className="btn btn-ghost " >Login</li></Link>
                            <Link to='/register'><li className="btn btn-ghost">Register</li></Link>
                        </div>
                    }

                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar  tooltip" data-tip={user?.email}>

                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 tooltip " data-tip="hello">
                         <img src={user?.photoURL} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;