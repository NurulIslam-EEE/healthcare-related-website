import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './Register.css';
import signup from '../../images/signup.png'
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { setEmail, setPassword, createUser, setLoading, signInUsingGoogle, error, setError, user, setName, setUserProfile } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || '/home';

    const handleName = (e) => {
        const newName = e.target.value;
        setName(newName)
        console.log(newName);
    }

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

    const handleCreateUser = () => {
        createUser()
            .then((result) => {
                history.push(redirect);
                setError('');

                setUserProfile();
                console.log(result.user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError('Invalid Email or Password');

            });
    }
    return (
        <div className='m-0 row'>
            <div className="mt-5 col-md-6 register">

                <h3>Please Sign Up</h3>
                <input onBlur={handleName} type="text" name="" id="" placeholder='Your Name' /> <br />
                <input onBlur={handleEmail} type="email" name="" id="" placeholder='Your Email' /> <br />
                <input onBlur={handlePass} type="password" name="" id="" placeholder='Password' /> <br />
                <p className='mt-3'>Already have an account? <Link className='text-info' to='/login'>Login </Link></p>
                <p className="text-danger">{error}</p>
                <button onClick={handleCreateUser} type="submit">Signup</button>

                <button onClick={handleGoogleLogin}> <img className='google' src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/5/53/20161128230037%21Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png" alt="" /> signIn Using Google</button>


            </div>

            <div className="col-md-6 signup-img">
                <img src={signup} alt="" />
            </div>

        </div>
    );
};

export default Register;