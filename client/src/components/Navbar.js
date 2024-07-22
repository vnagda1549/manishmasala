import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about-us">About</Link></li>
                <li><Link to="/contact-us">Contact</Link></li>
                <li><Link to="/Reviews">Reviews</Link></li>
                <li><Link to="/login">Login</Link></li>

            </ul>
        </nav>
    );
}

export default Navbar;
