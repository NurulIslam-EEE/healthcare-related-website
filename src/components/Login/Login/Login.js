import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
import login from '../../../images/login.png';
const Login = () => {
    const { signInUsingGoogle, signin, setEmail, setPassword, setLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || '/home';
    const [error, setError] = useState('');

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
    const handleSignIn = () => {
        signin()
            .then((user) => {
                history.push(redirect);
                setError('');
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError('Invalid-email or Password');
            })
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect);
            })
            .catch((error) => {
                const errorMessage = error.message;

            })

            .finally(() => setLoading(false));

    }
    return (
        <div className='m-0 row'>
            <div className="col-md-6 login">
                <h2>Please Login</h2>
                <input onBlur={handleEmail} type="email" name="" id="" placeholder='email' /> <br />
                <input onBlur={handlePass} type="password" name="" id="" placeholder='password' /> <br />
                <p className='mt-3'> New User? Please <Link className='text-info' to='/register'> Signup </Link></p>
                <p className='text-danger'>{error}</p>
                <button className='submit-login' onClick={handleSignIn} type="submit">Login</button>

                <button onClick={handleGoogleLogin}> <img className='google' src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/5/53/20161128230037%21Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png" alt="" /> signIn Using Google</button>

            </div>
            <div className="col-md-6 login-img">
                <img src={login} alt="" />
            </div>


        </div>
    );
};

export default Login;