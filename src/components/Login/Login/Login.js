import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
import login from '../../../images/login.png'
const Login = () => {
    const [signInUsingGoogle] = useAuth();
    return (
        <div className='mt-5 login row'>
            <div className="col-md-6">
                <h2>Please Login</h2>
                <input type="email" name="" id="" placeholder='email' /> <br />
                <input type="password" name="" id="" placeholder='password' /> <br />
                <button type="submit">Submit</button>
                <Link to='/register'><p className='text-danger'>New User? signup</p></Link>
                <button onClick={signInUsingGoogle}>signIn Using Google</button>
            </div>
            <div className="col-md-6 login-img">
                <img src={login} alt="" />
            </div>


        </div>
    );
};

export default Login;