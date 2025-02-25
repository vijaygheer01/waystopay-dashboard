import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { authForgotPassword } from '../../redux/reducer/authReducer';
import { useNavigate } from 'react-router-dom';

const ResetForm = ({ path }) => {

    const [email,setEmail] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        let arg = {
            emailId:email
        }
        dispatch(authForgotPassword(arg)).then((res) => {
            console.log('inside then dispatch ',res);
            if(res.payload.status === 200){
                setError('');
                setEmail('');
                alert('Reset link sent to your email');
                navigate('/login');
            }else{
                console.log('inside else ',res.payload.message);
                setError(`"${email}" not registered with us`);
            }
        }).catch((err) => {
            console.log(err);
        });
    }


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError('');
    }

    return (
        <>
            <h2 className="fs-20 fw-bolder mb-4">Forgot Password</h2>
            <h4 className="fs-13 fw-bold mb-2">Reset to your username/password</h4>
            <p className="fs-12 fw-medium text-muted">Enter your email and a reset link will sent to you, let's
                access our the best recommendation for you.</p>
            <form onSubmit={handleSubmit} className="w-100 mt-4 pt-2">
                <div className="mb-4">
                    <input  className={error ? 'form-control is-invalid' : 'form-control'} placeholder="Email or Username" value={email} onChange={handleEmailChange} required />
                    {error && <p className="text-danger">{error}</p>}
                </div>
                <div className="mt-5">
                    <button type="submit" className="btn btn-lg btn-primary w-100">Reset Now</button>
                </div>
            </form>
            <div className="mt-5 text-muted">
                <span> back to login</span>
                <Link to={'/login'} className="fw-bold"> back to login</Link>
            </div>
        </>
    )
}

export default ResetForm