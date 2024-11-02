import React, { useContext, useState } from 'react';
import Route from './Route';
import { FaDroplet } from "react-icons/fa6";
import { AiOutlineMenu, AiOutlineClose  } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { AuthContext } from '../PrivateRoute/PrivateRoute';
const NavBar = () => {
    const [success, setSuccess] = useState("");
    const {user, logOut} = useContext(AuthContext);
    const [click, setClick] = useState(false);
    const handleLogOut = () =>{
        logOut()
        .then(()=>{
            setSuccess("Logout Success")
        })
        .catch(error =>{
            setSuccess(error.message)
        })
    }
    const routes = [
        {id: 1,  path: "/", name: "Home"},
        {id: 2,  path: "/about", name: "About"},
        {id: 4,  path: "/service", name: "Service"},
        {id: 3,  path: "/contact", name: "Contact"},
    ]
    return (
        <div className='container bg-amber-400 mx-auto relative  flex justify-between items-center px-4 '>
            <div onClick={()=>setClick(!click)} className='text-3xl lg:hidden'>
                {click ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu> }
            </div>
            <div className='flex text-3xl font-extrabold justify-center items-center'>
                <h3 className=''>NIXON</h3>
                <h3 className='text-xl'><FaDroplet></FaDroplet></h3>
            </div>
            <ul className={`flex  flex-col absolute lg:static lg:flex-row gap-4 transition-all duration-700 ${click ? "top-12" : '-top-80'}`}>
            {routes.map(route => <Route key={route.id} link={route}></Route>)}
            </ul>
            <div className=''>{user ? <>{user.email} <span><button className='btn btn-link' onClick={handleLogOut}>LOGOUT</button></span></> : <Link to={"/login"}><button>LOGIN</button></Link> } </div>
            <span className='absolute top-8'>{success && <>{success}</>}</span>
        </div>
    );
};

export default NavBar;