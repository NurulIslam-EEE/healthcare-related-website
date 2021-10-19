import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
import login from '../../../images/login.png'
const Login = () => {
    const { signInUsingGoogle, signin, setEmail, setPassword, setLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || '/home';

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
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
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
        <div className='mt-5 login row'>
            <div className="col-md-6">


                <h2>Please Login</h2>
                <input onBlur={handleEmail} type="email" name="" id="" placeholder='email' /> <br />
                <input onBlur={handlePass} type="password" name="" id="" placeholder='password' /> <br />
                <button onClick={handleSignIn} type="submit">Submit</button>
                <Link to='/register'><p className='text-danger'>New User? signup</p></Link>
                <button onClick={handleGoogleLogin}>signIn Using Google</button>

            </div>
            <div className="col-md-6 login-img">
                <img src={login} alt="" />
            </div>


        </div>
    );
};

export default Login;