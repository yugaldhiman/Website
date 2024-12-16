
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <h3>Rajan & Company</h3>
                <p>Raj Complex, First Floor, Mahavir Chowk, Muzaffarnagar, UP- 251002</p>
                <p>
                    Email: <a href="mailto:rajancomp2019@gmail.com ">rajancomp2019@gmail.com </a>
                </p>
                <p>
                    Phone: <a href="tel:+9690900114">+91 9690900114</a>
                </p>
                <p>Established: 2019</p>
            </div>
            <p>&copy; {new Date().getFullYear()} Rajan & Company. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
