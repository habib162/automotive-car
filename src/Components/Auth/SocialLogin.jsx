import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

function SocialLogin() {
    const {googleLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleSocialLogin = (e) =>{
        e.preventDefault();
        googleLogin()

        .then(res => {
            navigate (location?.state ? location.state : "/");
            toast("Sign in successfully")
        })
        .catch((err) => toast(err))
    }
    return (
        <div>
            <div className='divider'>Continue With</div>
            <div className='text-center py-3'>
                <button className='btn btn-primary btn-circle btn-outline' onClick={handleSocialLogin}><FcGoogle></FcGoogle></button>
            </div>
        <ToastContainer />
        </div>
    );
}

export default SocialLogin;