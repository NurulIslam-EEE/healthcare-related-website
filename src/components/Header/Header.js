import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <Navbar className='header' bg="black" expand="lg">
            <Navbar.Brand href="#"> <img src={logo} alt="" className="logo" />  </Navbar.Brand>

            <Navbar.Toggle className='bg-white' aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="my-2 ms-auto nav"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link as={Link} className='text-white nav-res' to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} className='text-white nav-res' to="/services">Services</Nav.Link>
                    <Nav.Link as={Link} className='text-white nav-res' to="/">Blogs</Nav.Link>
                    <Nav.Link as={Link} className='text-white nav-res' to="/">Trainers</Nav.Link>
                    <p className='text-white'>{user.displayName}</p>
                    {user.email && <img className='profile' src={user.photoURL} alt="" />}
                    {!user?.displayName ? <Nav.Link as={Link} className='text-white' to="/login">Login</Nav.Link> : <button onClick={logOut}>Logout</button>}



                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;