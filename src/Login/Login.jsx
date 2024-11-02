import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import { FaEye, FaEyeSlash  } from "react-icons/fa";
import { AuthContext } from '../PrivateRoute/PrivateRoute';

const Login = () => {
    const naviGate = useNavigate(null);
    const {loginUser} = useContext(AuthContext);
    const emailRef = useRef(null);
    const [showPass, setShowPass] = useState(false);
    const [errorRegister, setErrorRegister] = useState("");
    const [success, setSuccess] = useState("");
    const handleLogin = e =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
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
        loginUser(email, password)
        .then(result =>{
            console.log(result.user)
            e.target.reset();
            naviGate("/")
            if(result.user.emailVerified){
                setSuccess('login is Successfull')
                return;
            }
            else{
                alert("please verify your email to check gmail")
                return;
            }

        })
        .catch(error =>{
            setErrorRegister(error.message)
        })
    }
    const handleForgetPassowrd = () =>{
        const email = emailRef.current.value;
        if(!email){
            setErrorRegister("please give an email")
            return
        }
        else if(!/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/.test(email)){
            setErrorRegister("please give a valid email")
            return
        }
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            alert("please reset your passowrd to check gmail")
        })
        .catch(error =>{
            setErrorRegister(error.message)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen  text-center">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={emailRef} name='email' type="email" placeholder="email" className="input input-bordered"  />
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
                                <a onClick={handleForgetPassowrd} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {success && <p className='text-green-700'>{success}</p>}
                    {errorRegister && <p className='text-red-800'>{errorRegister}</p>}
                </div>
                <div>
                    <h2>Don't have account <Link to={"/register"}><button className='btn btn-link'>REGISTER</button></Link> </h2> 
                </div>
            </div>
        </div>
    );
};

export default Login;