import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux';  
import { authLogin } from '../../redux/reducer/authReducer';


const LoginForm = ({ registerPath, resetPath }) => {

    const navigate = useNavigate();

    const [error,setError] = useState('');
    const [email,setEmail] = useState('vijaygheer01@gmail.com');
    const [password,setPassword] = useState('6739391918');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        let arg = { 
            emailId:email,
            password:password
        }
        dispatch(authLogin(arg)).then((res) => {
            console.log(res);
            if(res.payload.status === 200){
                localStorage.setItem('token',res.payload.token);
                navigate('/dashboard');
            }else{
                setError(`Invalid "${email}" or password`);
            }   
        }).catch((err) => {
            console.log(err);
        });
    }








    return (
        <>
            <h2 className="fs-20 fw-bolder mb-4">Login</h2>
            <h4 className="fs-13 fw-bold mb-2">Login to your account</h4>
        
            <form onSubmit={handleSubmit} className="w-100 mt-4 pt-2">
                <div className="mb-4">
                    <input type="email" className="form-control" placeholder="Email or Username" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {error && <p className="text-danger">{error}</p>}



                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="rememberMe" />
                            <label className="custom-control-label c-pointer" htmlFor="rememberMe">Remember Me</label>
                        </div>
                    </div>
                    <div>
                        <Link to={resetPath} className="fs-11 text-primary">Forget password?</Link>
                    </div>
                </div>
                <div className="mt-5">
                    <button type="submit" className="btn btn-lg btn-primary w-100">Login</button>
                </div>
            </form>


        </>
    )
}

export default LoginForm