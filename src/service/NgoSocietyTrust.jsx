<<<<<<< HEAD
import React from 'react'

const NgoSocietyTrust = () => {
    return (
        <div>
            <h1>NgoSocietyTrust</h1>
        </div>
    )
}

export default NgoSocietyTrust
=======
import React from "react";
import image from "../assets/ngoSocityTrust.jpg";
import Contact from "../pages/Contact";
import "./NgoSocietyTrust.css";

const NgoSocietyTrust = () => {
    return (
        <>
            <div className="NgoSocietyTrustMAinBox">
                <h1>NGO/SOCIETY/TRUST</h1>
                <p>Home / Services / NGO/SOCIETY/TRUST</p>
                <div className="NgoSocietyTrustMainBoxChilde_left">
                    <img src={image} alt="image not found" />
                    <p>
                        We provide range of services starting from incorporation or
                        registration of NGO/SOCIETY/TRUST, changing trustees or members,
                        getting the government aids for various projects and closing down
                        the NGO/SOCIETY/TRUST. In a nutshell we provide service from
                        inception to end in relation to NGO/SOCIETY/TRUST.
                    </p>
                    <p>
                        We also help our clients in getting their trust/Society/NGO
                        registered under section 80G or 12A of Income Tax Act 1961 so as to
                        get the maximum benefit under income tax. After registration under
                        section 80G, NGO/SOCIETY/TRUST can receive the donation from other
                        and provide them tax incentives under section 80G.
                    </p>
                    <p>
                        Income of NGO/SOCIETY/TRUST is exempt and accordingly not liable to
                        tax if they are registered under section 12A of Income Tax Act 1961.
                        We have helped more than 80 clients to getting their trust
                        registered under section 80G and 12A.
                    </p>
                    <p>
                        If a NGO/SOCIETY/TRUST wants to receive any foreign contribution
                        then it must be registered under Foreign Contribution & Regulation
                        Act (FCRA) 2010 in India. Society/trust/NGO also need to file their
                        Annual return under same laws. We help our clients in getting
                        registered under FCRA and in filing annual return under FCRA.
                    </p>
                </div>
                <div className="NgoSocietyTrustMainBoxChilde_right">
                    <Contact />
                </div>
            </div>
        </>
    );
};

export default NgoSocietyTrust;
>>>>>>> 99f49cc (uploads project)
