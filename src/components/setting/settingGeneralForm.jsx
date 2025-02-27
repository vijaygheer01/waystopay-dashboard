import React from 'react'
import PageHeaderSetting from '@/components/shared/pageHeader/PageHeaderSetting'
import Footer from '@/components/shared/Footer'
import TextAreaTopLabel from '@/components/shared/TextAreaTopLabel'
import { FiCamera } from 'react-icons/fi'
import useImageUpload from '@/hooks/useImageUpload'
import PerfectScrollbar from 'react-perfect-scrollbar'
import InputTopLabel from '@/components/shared/InputTopLabel'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authChangePassword } from '@/redux/reducer/authReducer';

const SettingGeneralForm = () => {

    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
    const dispatch = useDispatch();

    const handleChangePassword = () => {

        let arg = {
            emailId:'admin@waystopay.com',
            password:password
        }

        if(password !== confirmPassword){
            setError('Password and Confirm Password do not match');
            return;
        }

        if(password.length < 8){
            setError('Password must be at least 8 characters long');
            return;
        }


       

        dispatch(authChangePassword(arg)).then((res) => {
            if(res.payload.status === 200){
                setSuccess('Password changed successfully');
                setError('');
                setPassword('');
                setConfirmPassword('');
                setTimeout(() => {
                    setSuccess('');
                }, 3000);
            }else{
                setError(res.payload.message);
            }
        }).catch((err) => {
            console.log(err);
        });
    }




    return (
        <div className="content-area row p-3">
        <div className="form-section col-md-6 card p-3">
            <h4 className='text-center'>Change Password</h4>

            <InputTopLabel disabled={true} value={'admin@waystopay.com'} label="Email" type="email"  placeholder="Enter your email" />
            <InputTopLabel error={error} info={error} value={password} onChange={(e) => setPassword(e.target.value)} label="Password" type="password" placeholder="Enter new password" />
            <InputTopLabel error={error} info={error} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} label="Confirm Password" type="password" placeholder="Confirm new password" />
            {error && <p className='text-danger'>{error}</p>}
            {success && <p className='text-success'>{success}</p>}
            <button className='btn btn-primary' onClick={handleChangePassword}>Change Password</button>
        </div>
        </div>

    )
}

export default SettingGeneralForm