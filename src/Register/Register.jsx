import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash  } from "react-icons/fa";
import {sendEmailVerification, updateProfile } from 'firebase/auth';
import { AuthContext } from '../PrivateRoute/PrivateRoute';
const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const [errorRegister, setErrorRegister] = useState("");
    const [success, setSuccess] = useState("");
    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        setErrorRegister('');
        setSuccess('');
        if(password.length < 8){
            setErrorRegister("please type 8 charecter or more");
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setErrorRegister("please type password with capital letter");
            return;
        }
        else if(!accepted){
            setErrorRegister("please accepte our terms & conditions");
            return;
        }
        createUser( email, password)
        .then(result =>{
            console.log(result.user)
            // profile Update
            updateProfile(result.user, {
                displayName: name
            })
            .then(()=>{
                setSuccess("Profile is updated")
            })
            .catch(error =>{
                setErrorRegister(error.message)
            });
            // verificatin email 
            sendEmailVerification(result.user)
            .then(()=>{
                alert("please virify your email to check gmail")
            })
            setSuccess("userProfile is created")

        })
        .catch(error =>{
            setErrorRegister(error.message)
        })
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen text-center">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div  className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='relative'>
                            <input name='password' type={showPass ? "text" : "password"} placeholder="password" className="input input-bordered w-full" />
                            <span onClick={()=>setShowPass(!showPass)} className='absolute text-2xl top-3 end-3'>{showPass ? <FaEyeSlash/> : <FaEye/>}</span>
                            </div>
                            <label className="label">
                                <input type="checkbox" name="terms"/> <span className='ms-2'>Please Accept our <a className='text-blue-700 underline' href="#">Terms & Conditions</a></span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">REGISTER</button>
                        </div>
                    </form>
                    {success && <p className='text-green-700'>{success}</p>}
                    {errorRegister && <p className='text-red-800'>{errorRegister}</p>}
                </div>
                <div>
                    <h2>AllReady have account <Link to={"/login"}><button className='btn btn-link'>LOGIN</button></Link> </h2> 
                </div>
            </div>
        </div>
    );
};

export default Register;