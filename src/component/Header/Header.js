
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='header_part'>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/block">Block</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/reviews">Reviews</Link>
            </nav>
            
            
        </div>
    );
};

export default Header;