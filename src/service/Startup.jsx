<<<<<<< HEAD
import React from 'react'

const Startup = () => {
    return (
        <div>
            <h1>startup</h1>
        </div>
    )
}

export default Startup
=======
import React from "react";
import image from "../assets/startup.jpg";
import Contact from "../pages/Contact";
import "./Startup.css";

const Startup = () => {
    return (
        <>
            <div className="startupMAinBox">
                <h1>Startup/New Business</h1>
                <p>Home / Services / Startup/New Business</p>
                <div className="startupMainBoxChilde_left">
                    <img src={image} alt="image not found" />
                    <p>
                        India is second most developing country in startups and therefore
                        this sector is growing at its fastest pace. Government’s “Startup
                        India & Standup India” Scheme fuels this pace. We at Arpit Gupta &
                        Co. help startup many ways in getting the maximum benefits of
                        government scheme and services. Following are few of them:
                    </p>
                    <p>
                        <span>*</span> Startup Registration
                    </p>
                    <p>
                        <span>*</span> Funding to startup from government scheme
                    </p>
                    <p>
                        <span>*</span> Startup Funding from private financers
                    </p>
                    <p>
                        <span>*</span> Startup’s legal compliances like periodical filings under various applicable laws
                    </p>
                </div>
                <div className="startupMainBoxChilde_right">
                    <Contact />
                </div>
            </div>
        </>
    );
};

export default Startup;
>>>>>>> 99f49cc (uploads project)
