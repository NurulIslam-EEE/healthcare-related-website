import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import signup from '../../images/signup.png'

const Register = () => {
    const handleEmail = (e) => {
        console.log(e.target.value);
    }
    const handlePass = (e) => {
        console.log(e.target.value);
    }
    return (
        <div className='row'>
            <div className="mt-5 col-md-6 register">
                <h3>Please Sign Up</h3>
                <input type="text" name="" id="" placeholder='Your Name' /> <br />
                <input onChange={handleEmail} type="email" name="" id="" placeholder='Your Email' /> <br />
                <input onChange={handlePass} type="password" name="" id="" placeholder='Password' /> <br />
                <Link to='/login'><p className='text-danger'>Already Register? sign in</p></Link>
                <button type="submit">Submit</button>
            </div>
            <div className="col-md-6 signup-img">
                <img src={signup} alt="" />
            </div>

        </div>
    );
};

export default Register;