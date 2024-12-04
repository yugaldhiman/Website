
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <h3>Your Company Name</h3>
                <p>123 Startup Street, Tech City, Country - ZIP 456789</p>
                <p>
                    Email: <a href="mailto:yugaldhiman14@gmail.com">yugaldhiman14@gmail.com</a>
                </p>
                <p>
                    Phone: <a href="tel:+9690900114">+9 (690) 900-114</a>
                </p>
                <p>Established: 2020</p>
            </div>
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
