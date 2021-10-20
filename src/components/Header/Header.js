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
                    className="my-2 ms-auto my-lg-0 nav"

                    navbarScroll
                >
                    <Nav.Link as={Link} className='text-white nav-res' to="/home">HOME</Nav.Link>
                    <Nav.Link as={Link} className='text-white nav-res' to="/services">TRAINING</Nav.Link>
                    <Nav.Link as={Link} className='text-white nav-res' to="/blogs">BLOGS</Nav.Link>
                    <Nav.Link as={Link} className='text-white nav-res' to="/about">ABOUT</Nav.Link>
                    <p className='text-white'>{user?.displayName}</p>
                    {user?.email && <img className='profile' src={user?.photoURL} alt="" />}
                    {!user?.email ? <Nav.Link as={Link} className='px-3 text-white header-login' to="/login">Login</Nav.Link> : <button className='logout' onClick={logOut}>Logout</button>}



                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;