import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import signup from '../../images/signup.png'
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { setEmail, setPassword, createUser } = useAuth();
    const handleEmail = (e) => {

        const newEmail = e.target.value;
        setEmail(newEmail)
        console.log(newEmail);
    }
    const handlePass = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword)
        console.log(newPassword);
    }


    return (
        <div className='row'>
            <div className="mt-5 col-md-6 register">
                <form >
                    <h3>Please Sign Up</h3>
                    <input type="text" name="" id="" placeholder='Your Name' /> <br />
                    <input onBlur={handleEmail} type="email" name="" id="" placeholder='Your Email' /> <br />
                    <input onBlur={handlePass} type="password" name="" id="" placeholder='Password' /> <br />
                    <Link to='/login'><p className='text-danger'>Already Register? sign in</p></Link>
                    <button onClick={createUser} type="submit">Submit</button>
                </form>
            </div>

            <div className="col-md-6 signup-img">
                <img src={signup} alt="" />
            </div>

        </div>
    );
};

export default Register;